let str = "https://s3.eu-west-2.amazonaws.com/edge.world/e1dc075d-afdf-4fe6-b221-8285affed819/2022-01-07T10%3A40%3A48.221Z-tea.jpg"
let arr = str.split("-")
arr
let filename = arr[arr.length - 1]
let fname = filename.split(".").shift()
fname