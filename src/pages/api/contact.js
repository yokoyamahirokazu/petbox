export default function sendmail(req, res) {
  //　改行のエスケープシーケンスをbrタグに置換
  const htmlMsg = req.body.message.replaceAll("\n", "<br>");
  let nodemailer = require("nodemailer");

  // 送信用アカウントの設定（ここではGmail）
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "petboxsendmail@gmail.com",
      // Googleアカウントでアプリパスワードを取得して入れる
      pass: "gevfzoutbsbcinbh",
    },
    secure: true,
  });

  // 管理人に送るお問い合わせメッセージ通知メール
  const toHostMailData = {
    from: "petboxsendmail@gmail.com",
    to: "petboxsendmail@gmail.com",
    subject: `【WEBサイトお問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${htmlMsg}</p>
    `,
  };

  // ゲストに送る自動受付メール
  const toGuestMailData = {
    from: "petboxsendmail@gmail.com",
    // 入力されたゲストのメールアドレスが入る
    to: `${req.body.email}`,
    subject: `【お問い合わせ自動受付メール】`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>
        お問い合わせありがとうございます。
        <br>以下の内容でお問い合わせを承りました。
      </p>
      <p>-----------------------------------------</p>
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${htmlMsg}</p>
      <p>-----------------------------------------</p>
    `,
  };

  // 送信する
  transporter.sendMail(toHostMailData, function (err, info) {});
  transporter.sendMail(toGuestMailData, function (err, info) {});

  res.send("success");
}
