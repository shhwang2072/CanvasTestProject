function drawCanvas() {
    var ctx = document.getElementById('canvas').getContext('2d');
  
    // 그레이디언트를 생성한다
    var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.5, '#fff');
    lingrad.addColorStop(0.5, '#26C000');
    lingrad.addColorStop(1, '#fff');
  
    var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
    lingrad2.addColorStop(0.5, '#000');
    lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
    // 외곽선과 채움 스타일에 그레이디언트를 적용한다
    ctx.fillStyle = lingrad;
    ctx.strokeStyle = lingrad2;
  
    // 도형을 그린다
    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
  
}


function testsum(x,y) {
    return x+y
}

console.log(testsum(1,4));
console.log(testsum(100,4));
