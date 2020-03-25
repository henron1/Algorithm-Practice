def equisolve 
    result = []
    for i in 0..999
      array = i.digits
      if(array.sum == 10 && array.include?(7) && array[0] != 0 && result.length < 10)
        result.push(array.join('').to_i)
      end
    end
    puts result.sort
end
  
equisolve