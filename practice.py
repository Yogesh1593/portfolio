
def logger(func):
     def wrapper(a, b):
         print(f"Calling {func.__name__}")
         result = func(a, b)
         print(result)
         print(f"Done {func.__name__}")
         return result
     return wrapper

@logger
def add(a, b):
    return a + b

add(2, 3)


