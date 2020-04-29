class Heap:
    def __init__(self):
        self.storage = []

    def insert(self, value):
        pass
        # append(value) to heap
        # bubble up last idx in arr

    def delete(self):
        pass 
        # store max value of heap
        # swap first and last values pop
        # sift down first element
        # return max val

    def get_max(self):
        return self.storage[0]

    def get_size(self):
        return len(self.storage)

    def _bubble_up(self, index):
        pass
        # parent_index = index - 1 // 2
        # if index 0 return
        # if parent < storage[index] 
            # swap
            # call bubble_up
        # else  
            # return

    def _sift_down(self, index):
        pass
        # left_index = index * 2 + 1
        # right_index = index * 2 + 2
        # initialize children
        # check to see if child index is more than parent
        # check to see if both children are greater and take the greateset of the two
        # are there even chilluns left?
        # check if we should swap if so:  
            #we swap with the highest avaliable value child to swap with
            # continue to sift down
        # else return