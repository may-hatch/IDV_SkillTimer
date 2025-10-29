function count_sec(area,max){
    let timer=max-1;
    //固定値はconst
    const sec=1000;

  // 動的に intervalId を管理（グローバルに保存したい場合は window に）
    const intervalKey = `intervalId${max}`;
    window[intervalKey] = setInterval(() => {
        document.getElementById(area).innerText = timer;
        timer--;
        if (timer < 0 && window[intervalKey] != null) {
          clearInterval(window[intervalKey]);
          document.getElementById(area).innerText = max;
    }
  }, sec);
}

function reset(){
    clearInterval(intervalId150);
    clearInterval(intervalId100);
    clearInterval(intervalId90);
    document.getElementById("area150").innerText = 150;
    document.getElementById("area100").innerText = 100;
    document.getElementById("area90").innerText = 90;
}

//button150の値を定義
let button_150=document.getElementById("btn150");
//ボタンが押されたときに関数を動かす
button_150.addEventListener("click",()=>count_sec("area150",150));

//button100の値を定義
let button_100=document.getElementById("btn100");
//ボタンが押されたときに関数を動かす
button_100.addEventListener("click",()=>count_sec("area100",100));

//button90の値を定義
let button_90=document.getElementById("btn90");
//ボタンが押されたときに関数を動かす
button_90.addEventListener("click",()=>count_sec("area90",90));

//ストップするボタンを定義
let button_reset=document.getElementById("btnReset");
button_reset.addEventListener("click",reset);