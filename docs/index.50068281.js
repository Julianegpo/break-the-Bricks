const t="keydown",i="ArrowRight",s="ArrowLeft",e=" ";class o{constructor(t,i,s){this.position={x:t.x,y:t.y},this.ctx=i,this.speed={dx:0,dy:0},this.playerBar=s}update(t,i,s){(this.position.x+this.speed.dx>=i||this.position.x+this.speed.dx<=0)&&(this.speed.dx=-this.speed.dx),(this.position.y+this.speed.dy>=s||this.position.y+this.speed.dy<=0)&&(this.speed.dy=-this.speed.dy),this.position.x>this.playerBar.position.x&&this.position.x<this.playerBar.position.x+80&&this.position.y>this.playerBar.position.y&&this.position.y<this.playerBar.position.y+15&&(this.speed.dy=-this.speed.dy),this.position.y>=s-10&&(this.speed.dx=0,this.speed.dy=0),this.position.x+=this.speed.dx*(100*t),this.position.y+=this.speed.dy*(100*t)}draw(t,i){i.beginPath(),i.strokeStyle="pink",i.fillStyle="pink",i.arc(this.position.x,this.position.y,10,0,2*Math.PI,!0),i.closePath(),i.fill()}keyboard_event(t){t===e&&(this.speed.dx=2,this.speed.dy=4)}}class h{constructor(t,i,s=0){this.position={x:t.x,y:t.y},this.ctx=i,this.speed=s}update(t,i){let s=this.position.x+this.speed*t;s+80<=i&&s>=0&&(this.position.x=s)}draw(t,i){i.strokeStyle="white",i.fillStyle="white",i.rect(this.position.x,this.position.y,80,15),i.fill()}keyboard_event(t){switch(t){case i:this.speed=225;break;case s:this.speed=-225}}}class d{constructor(t){this.position=t}update(t,i,s){}draw(t,i){const s=(1/t).toFixed(2);i.font="10px Arial",i.fillStyle="yellow",i.fillText(`FPS: ${s}`,this.position.x,this.position.y)}keyboard_event(t){}}window.onload=()=>{const i=document.getElementById("canvas"),s=i.getContext("2d");let e=function(t,i){const s=new d({x:i.width/2-20,y:i.height}),e=new h({x:i.width/2-40,y:450},t),n=new o({x:250,y:100},t,e);return[s,e,n]}(s,i),n=0;const p=t=>{let o=(t-n)/1e3;n=t,e.forEach((t=>{t.update(o,i.width,i.height)})),s.clearRect(0,0,i.width,i.height),e.forEach((t=>{t.draw(o,s)})),window.requestAnimationFrame(p)};window.requestAnimationFrame(p),document.body.addEventListener(t,(t=>{e.forEach((i=>{i.keyboard_event(t.key)}))}))};
//# sourceMappingURL=index.50068281.js.map
