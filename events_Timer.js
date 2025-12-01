function count_sec(area,max){
  //変数はlet
  let timer=max-1;
  //固定値はconst
  const sec=1000;

  //動的に intervalId を管理（グローバルに保存したい場合は window に）
  //バッククォートを使うと動的に反応してくれる、"や'だと無理
  const intervalKey = `intervalId${max}`;

  //二回目以降のリセット
  if (window[intervalKey]){
    clearInterval(window[intervalKey]);}

  //カウント
  window[intervalKey] = setInterval(() => {
    document.getElementById(area).innerText = timer;
    timer--;
      if (timer < 0 && window[intervalKey] != null) {
        clearInterval(window[intervalKey]);
        document.getElementById(area).innerText = max;
    }
  }, sec);
}

//【要修正：単独ボタンから動かすとkanshiが正常にカウントされない】
//監視者用_数値
//基本はcount_secと同様
//40秒で一周する円グラフと、個数表示(0~3)
function count_kanshi(kanshi=0){
  let timer=39;
  const sec=1000;

  //二回目以降のリセット
  if (window["intervalId40"]){
    clearInterval(window["intervalId40"]);}

  //カウント
  window["intervalId40"] = setInterval(() => {
    document.getElementById("area40").innerText = timer;
    //円を取得
    var circle=document.getElementById("circle");
    //円のストロークのずれを決める
    var nagasa = timer/40*283;
    //circle.style.設定項目で数値いじれる
    circle.style.strokeDashoffset = nagasa;
    timer--;
      if (timer < 0 && window["intervalId40"]) {
        kanshi++;
        clearInterval(window["intervalId40"]);
        document.getElementById("areaKanshi").innerText = kanshi;
        document.getElementById("area40").innerText=40;
        circle.style.strokeDashoffset = 283;
        //kanshiが3になるまでは再度繰り返す
        if (kanshi<3){
          count_kanshi(kanshi);}
    }
  }, sec);
}

function start(){
  count_sec("area150",150);
  count_sec("area100",100);
  count_sec("area90",90);
  count_kanshi();
}

function reset(){
    clearInterval(window["intervalId150"]);
    clearInterval(window["intervalId100"]);
    clearInterval(window["intervalId90"]);
    clearInterval(window["intervalId40"]);
    document.getElementById("area150").innerText = 150;
    document.getElementById("area100").innerText = 100;
    document.getElementById("area90").innerText = 90;
    document.getElementById("area40").innerText = 40;
    document.getElementById("areaKanshi").innerText = 0;
    document.getElementById("circle").style.strokeDashoffset=283;
}

//button150の値を定義
let button_150=document.getElementById("btn150");
//ボタンが押されたときに関数を動かす
button_150.addEventListener("click",()=>count_sec("area150",150));

let button_100=document.getElementById("btn100");
button_100.addEventListener("click",()=>count_sec("area100",100));

let button_90=document.getElementById("btn90");
button_90.addEventListener("click",()=>count_sec("area90",90));

let button_40=document.getElementById("btn40");
//40秒のは表示が違うので違う名前の関数
button_40.addEventListener("click",count_kanshi);

//スタートボタン
let button_start=document.getElementById("btnStart");
button_start.addEventListener("click",start);

//リセットボタン
let button_reset=document.getElementById("btnReset");
button_reset.addEventListener("click",reset);