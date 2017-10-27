<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="counter"></div>
  <script>
    const counter = document.querySelector('#counter')
    let timer = 0
    setInterval(() => {
      counter.innerHTML = timer++
    }, 500)
  </script>
</body>
</html>