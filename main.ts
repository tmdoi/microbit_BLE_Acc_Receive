function リセット計測時間 () {
    リセットミリ秒 = input.runningTime()
    計測時間ミリ秒 = input.runningTime() - リセットミリ秒
    現在時刻 = 計測時間ミリ秒
    データ出力()
}
radio.onReceivedString(function (receivedString) {
    受信文字列 = receivedString
})
input.onButtonPressed(Button.B, function () {
    リセット計測時間()
})
function データ出力 () {
    serial.writeLine("" + 受信文字列 + ",")
}
let 受信文字列 = ""
let 現在時刻 = 0
let 計測時間ミリ秒 = 0
let リセットミリ秒 = 0
radio.setGroup(1)
リセット計測時間()
let 設定時間ミリ秒 = 100
basic.forever(function () {
    計測時間ミリ秒 = input.runningTime() - リセットミリ秒
    if (現在時刻 + 設定時間ミリ秒 < 計測時間ミリ秒) {
        現在時刻 = 現在時刻 + 設定時間ミリ秒
        データ出力()
    }
})
