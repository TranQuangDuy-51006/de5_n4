const QUIZ_DATA = [
  {
    id: 1,
    section: "文字・語彙",
    q: "きのう 3 時間 <u>以上</u> べんきょうしました。",
    options: ["いがい", "いじょう", "いない", "いか"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 2,
    section: "文字・語彙",
    q: "もう 少し <u>近い</u> ほうが いいです。",
    options: ["ちかい", "はやい", "ひろい", "ふとい"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 3,
    section: "文字・語彙",
    q: "あしたは <u>都合</u>が わるいです。",
    options: ["とごう", "つかい", "つごう", "とかい"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 4,
    section: "文字・語彙",
    q: "ドアを <u>引いて</u> ください。",
    options: ["ふいて", "ひいて", "ついて", "おいて"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 5,
    section: "文字・語彙",
    q: "<u>女性</u>の おてあらいは あちらです。",
    options: ["しょせい", "だんせい", "じょせい", "たんせい"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 6,
    section: "文字・語彙",
    q: "いつから <u>習って</u> いるんですか。",
    options: ["おそわって", "かよって", "おこなって", "ならって"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 7,
    section: "文字・語彙",
    q: "あそこに いるのは はやしさんの<u>お姉さん</u>です。",
    options: ["おねえさん", "おにいさん", "おねさん", "おにさん"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 8,
    section: "文字・語彙",
    q: "おとといの <u>よる</u> パーティーに 行きました。",
    options: ["晩", "夜", "挽", "液"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 9,
    section: "文字・語彙",
    q: "あの <u>しろい</u> 車が わたしのです。",
    options: ["赤い", "青い", "黒い", "白い"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 10,
    section: "文字・語彙",
    q: "<u>しょくどう</u>は あの たてものの 中です。",
    options: ["食室", "飯堂", "食堂", "飯堂"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 11,
    section: "文字・語彙",
    q: "まどを <u>しめて</u> ください。",
    options: ["関めて", "閉めて", "問めて", "開めて"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 12,
    section: "文字・語彙",
    q: "なかさんは <u>しんせつ</u>です。",
    options: ["親切", "新切", "親功", "新功"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 13,
    section: "文字・語彙",
    q: "このどうぐは、あの きかいを なおす ために ( )です。",
    options: ["ねっしん", "ていねい", "ひつよう", "とくべつ"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 14,
    section: "文字・語彙",
    q: "この プールは( )ですから、子どもは およがないで ください。",
    options: ["かたい", "おもい", "ふかい", "にがい"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 15,
    section: "文字・語彙",
    q: "その はがきに この きってを ( )ください。",
    options: ["かけて", "はって", "ぬって", "すてて"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 16,
    section: "文字・語彙",
    q: "えきまえの ほんやは あさ 8 時から ( )して います。",
    options: ["えいぎょう", "せいさん", "ぼうえき", "ゆしゅつ"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 17,
    section: "文字・語彙",
    q: "この みちを まっすぐ ( )と、右がわに としょかんが あります。",
    options: ["でかける", "うごく", "たずねる", "すすむ"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 18,
    section: "文字・語彙",
    q: "どちらの けいかくが いいと おもうか、みんなの ( )聞きました。",
    options: ["やくそく", "いけん", "あいさつ", "ひみつ"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 19,
    section: "文字・語彙",
    q: "きのう うちの ねこが 子どもを 3 びき ( )。",
    options: ["しました", "だしました", "やりました", "うみました"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 20,
    section: "文字・語彙",
    q: "しけんの ( )が よかったので、うれしいです。",
    options: ["けっか", "ごうかく", "げんいん", "せいこう"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 21,
    section: "文字・語彙",
    q: "さいきん いそがしくて、うんどうできません。",
    options: [
      "さいきん いそがしくて、本を 読んで いません。",
      "さいきん いそがしくて、休んで いません。",
      "さいきん いそがしくて、うちの しごとを して いません。",
      "さいきん いそがしくて、スポーツを して いません。",
    ],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 22,
    section: "文字・語彙",
    q: "くうこうは ここから とおいですか。",
    options: [
      "ひこうきに のる ところは ここから とおいですか。",
      "ふねに のる ところは ここから とおいですか。",
      "たべものを 買う ところは ここから とおいですか。",
      "きっぷを 買う ところは ここから とおいですか。",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 23,
    section: "文字・語彙",
    q: "もりさんに たのみました。",
    options: [
      "もりさんに れんらくしました。",
      "もりさんに へんじしました。",
      "もりさんに おねがいしました。",
      "もりさんに しょうかいしました。",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 24,
    section: "文字・語彙",
    q: "けさから 雨が ざあざあ ふって います。",
    options: [
      "けさから つめたい 雨が ふって います。",
      "けさから こまかい 雨が ふって います。",
      "けさから 雨が しずかに ふって います。",
      "けさから 雨が つよく ふって います。",
    ],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 25,
    section: "文字・語彙",
    q: "しんぱい",
    options: [
      "たなか「先週 ひさしぶりに ともだちに あったんです」 やまだ「それは しんぱいですね」",
      "たなか「先週 わたしに たんじょうびの プレゼントが とどいたんです」 やまだ「それは しんぱいですね。」",
      "たなか「先週 かって いた いぬが しんだんです。」 やまだ「それは しんぱいですね。」",
      "たなか「先週 あにが にゅういんしたんです。」 やまだ「それは しんぱいですね。」",
    ],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 26,
    section: "文字・語彙",
    q: "せまい",
    options: [
      "この みちは せまいので、車は とおれません。",
      "この ズボンは わたしには 少し せまいです。",
      "小さい じを 書く ときは、せまい ペンが いいです。",
      "その やさいは せまく きって ください。",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 27,
    section: "文字・語彙",
    q: "こしょう",
    options: [
      "水を あげるのを わすれて、花が こしょうして しまいました。",
      "その パソコンは こしょうして いるので、つかえません。",
      "この ぎゅうにゅうは こしょうして いるので、飲まないで ください。",
      "テーブルから おちて、コップが こしょうしました。",
    ],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 28,
    section: "文字・語彙",
    q: "たおれる",
    options: [
      "たいふうで 山が たおれました。",
      "おとうとは こうつうじこで 足が たおれました。",
      "大きい じしんで ほんだなが たおれました。",
      "先生の びょうきで じゅぎょうが たおれました。",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 29,
    section: "文法",
    q: "田中さんは かぜ ( ) 仕事を 休みました。",
    options: ["を", "で", "に", "が"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 30,
    section: "文法",
    q: "私は 毎朝、天気予報を 見て、駅まで 自転車で 行くか バスで 行く ( ) 決めます。",
    options: ["を", "と", "か", "が"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 31,
    section: "文法",
    q: "バターは ぎゅうにゅう ( ) 作られます。",
    options: ["の", "を", "から", "には"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 32,
    section: "文法",
    q: "(かばん屋で) 客「すみません、この スーツケース( )同じくらいの 大きさで、もっと 軽いのは ありますか。」",
    options: ["が", "に", "を", "と"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 33,
    section: "文法",
    q: "田中「リーさんは 日本でも ちゅうか料理を 食べて いますか。」 リー「いいえ。 ( )に 来てから 食べて いません。」",
    options: ["あっち", "どっち", "こっち", "そっち"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 34,
    section: "文法",
    q: "私は アイスクリームが 大好きです。 ( )いちごの アイスクリームが 好きです。",
    options: ["とくに", "かならず", "よく", "だんだん"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 35,
    section: "文法",
    q: "きのうは 私は 一日( ) 家に いました。",
    options: ["しか", "ごろ", "間", "中"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 36,
    section: "文法",
    q: "A「週末は 何か予定が ありますか。」 B「ええ、( ) ともだちと テニスを しようと 思っています。」",
    options: ["晴れて", "晴れたり", "晴れると", "晴れたら"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 37,
    section: "文法",
    q: "わたしは いい 仕事を 見つけて 両親を ( ) ことが できました。",
    options: ["安心する", "安心させる", "安心して いる", "安心させて いる"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 38,
    section: "文法",
    q: "A「みんな 集まりましたか。」 B「田中さんが まだ ( )。」",
    options: ["来ません", "来ませんでした", "来ました", "来るでしょう"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 39,
    section: "文法",
    q: "ジョン「サムさん、しゅくだいは 出しましたか。」 サム「ええ。 今、先生に 出して ( )。」",
    options: ["いきました", "きました", "いました", "ありました"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 40,
    section: "文法",
    q: "(映画館の前で) A「山田さん おそいですね。」 B「そうですね。 電車が おくれて いる( )。」",
    options: ["のかもしれません", "つもりです", "ことに なります", "ところです"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 41,
    section: "文法",
    q: "A「もしもし、タクシーを 1 台 おねがい ( )。」 B「はい。 場所は どちらですか。」 A「西山びょういんまで 来て ください。」",
    options: ["したいんですが", "しますが", "したいんですか", "しますか"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 42,
    section: "文法",
    q: "弟は 映画が 好きで、ビデオ ___ ___ _★_ ___ 。",
    options: ["持って います", "も", "を", "２００本"],
    answer: 2,
    passage: null,
    note: "★問題",
  },
  {
    id: 43,
    section: "文法",
    q: "わたしは 日本の 料理を、はしを ___ ___ _★_ ___ しました。",
    options: ["使って", "食べたくて", "練習を", "使い方の"],
    answer: 4,
    passage: null,
    note: "★問題",
  },
  {
    id: 44,
    section: "文法",
    q: "A「新しい アパートは どう?」 B「ちょっと 駅から ___ ___ _★_ ___ ところだよ。」",
    options: ["静かで", "遠い", "けど", "いい"],
    answer: 1,
    passage: null,
    note: "★問題",
  },
  {
    id: 45,
    section: "文法",
    q: "外国に 住んで いる ___ ___ _★_ ___ 思う。",
    options: ["けっこんすると", "プレゼントを 送ろうと", "友達が", "聞いたので"],
    answer: 2,
    passage: null,
    note: "★問題",
  },
  {
    id: 46,
    section: "読解",
    q: "18.",
    options: ["もっと", "やっと", "また", "まだ"],
    answer: 2,
    passage:
      "初めての 野球\n\nパホモフ セリク\n\n日本に 来る 前に まんがで 野球という スポーツを 知って、きょうみを もちました。でも、私の 国では、野球を して いる 人を 見たことが ありません。道具も ないので、野球は できませんでした。\n\n先週の 土曜日に ともだちが 入っている 野球クラブの 見学に 行きました。クラブの 人たちに さそわれて、ずっと やりたかった 野球の 練習を 初めて することになりました。【18】野球が できることに なって、うれしかったです。ボールを 打つのは 難しかったです。でも、クラブの 人たちが やさしく【19】。野球は やはり おもしろい スポーツだと 思いました。【20】クラブに 入ることに しました。\n\nこれから 毎日 クラブで たくさん 練習します。そして、いつか 試合に【21】。",
    note: null,
  },
  {
    id: 47,
    section: "読解",
    q: "19.",
    options: ["教えて くれました", "教えて あげました", "教えて もらいました", "教えて やりました"],
    answer: 1,
    passage:
      "初めての 野球\n\nパホモフ セリク\n\n日本に 来る 前に まんがで 野球という スポーツを 知って、きょうみを もちました。でも、私の 国では、野球を して いる 人を 見たことが ありません。道具も ないので、野球は できませんでした。\n\n先週の 土曜日に ともだちが 入っている 野球クラブの 見学に 行きました。クラブの 人たちに さそわれて、ずっと やりたかった 野球の 練習を 初めて することになりました。【18】野球が できることに なって、うれしかったです。ボールを 打つのは 難しかったです。でも、クラブの 人たちが やさしく【19】。野球は やはり おもしろい スポーツだと 思いました。【20】クラブに 入ることに しました。\n\nこれから 毎日 クラブで たくさん 練習します。そして、いつか 試合に【21】。",
    note: null,
  },
  {
    id: 48,
    section: "読解",
    q: "20.",
    options: ["たとえば", "それに", "けれども", "それで"],
    answer: 4,
    passage:
      "初めての 野球\n\nパホモフ セリク\n\n日本に 来る 前に まんがで 野球という スポーツを 知って、きょうみを もちました。でも、私の 国では、野球を して いる 人を 見たことが ありません。道具も ないので、野球は できませんでした。\n\n先週の 土曜日に ともだちが 入っている 野球クラブの 見学に 行きました。クラブの 人たちに さそわれて、ずっと やりたかった 野球の 練習を 初めて することになりました。【18】野球が できることに なって、うれしかったです。ボールを 打つのは 難しかったです。でも、クラブの 人たちが やさしく【19】。野球は やはり おもしろい スポーツだと 思いました。【20】クラブに 入ることに しました。\n\nこれから 毎日 クラブで たくさん 練習します。そして、いつか 試合に【21】。",
    note: null,
  },
  {
    id: 49,
    section: "読解",
    q: "21.",
    options: ["出るからです", "出るためです", "出て みたいです", "出て みることです"],
    answer: 3,
    passage:
      "初めての 野球\n\nパホモフ セリク\n\n日本に 来る 前に まんがで 野球という スポーツを 知って、きょうみを もちました。でも、私の 国では、野球を して いる 人を 見たことが ありません。道具も ないので、野球は できませんでした。\n\n先週の 土曜日に ともだちが 入っている 野球クラブの 見学に 行きました。クラブの 人たちに さそわれて、ずっと やりたかった 野球の 練習を 初めて することになりました。【18】野球が できることに なって、うれしかったです。ボールを 打つのは 難しかったです。でも、クラブの 人たちが やさしく【19】。野球は やはり おもしろい スポーツだと 思いました。【20】クラブに 入ることに しました。\n\nこれから 毎日 クラブで たくさん 練習します。そして、いつか 試合に【21】。",
    note: null,
  },
  {
    id: 50,
    section: "読解",
    q: "22. 「私」の 友達は、嫌な ことが あったとき、どうしますか。",
    options: [
      "忘れる ために、友達に 話します。",
      "忘れる ために、カラオケで 歌います。",
      "忘れる ために、日記に 書きます。",
      "覚えて おく ために、日記に 書きます。",
    ],
    answer: 3,
    passage:
      "嫌なことが あったら、私の 友達は 日記に 書くそうです、嫌な 気持ちを 外に 出せるから 忘れられると 言っています。でも、私は カラオケに 行って、好きな 歌を 歌います。書いているときに 嫌な ことを 思い出してしまうので。日記には 書きません。",
    note: null,
  },
  {
    id: 51,
    section: "読解",
    q: "23. 来週の 授業について、正しいものは どれですか。",
    options: [
      "来週の 火曜日は、いつもより 長く 授業を 受けます。",
      "来週の 木曜日は、いつもより 早く 授業に 行きます。",
      "来週の 火曜日と 木曜日は、いつもより 長く 授業を 受けます。",
      "来週の 火曜日と 木曜日は、いつもより 早く 授業に 行きます。",
    ],
    answer: 2,
    passage:
      "お知らせ\n\n「日本語会話」(月曜日から 金曜日の 1時から 2時半まで)は、来週の 火曜日と木曜日だけ 時間が かわります。\n火曜日：1時半から 2時半まで\n木曜日：12時半から 2時半まで\n木曜日は 昼休みが 短く なりますが、おくれないで 来て ください。",
    note: null,
  },
  {
    id: 52,
    section: "読解",
    q: "24. ロンさんは 石田さんに 何を 頼みましたか。",
    options: [
      "ロンさんと 一緒に、部長会議に 出ること",
      "11時半に、弁当を 部長会議に 持って 行くこと",
      "「こま屋」が 弁当を 持って きたら、弁当代を 払うこと",
      "弁当を 「こま屋」に 取りに 行って、ロンさんの 机に 置くこと",
    ],
    answer: 4,
    passage:
      "(会社で)\n\n石田さんの 机の 上に、この メモが 置いて おります。\n\n石田さん\n青木部長に よばれて、今から 部長会議に 出ることに なりました。\n部長会議の 弁当は、私が 11時半に 「こま屋」に 取りに 行く 予定でしたが、行けなくなったので、行って きて ください。お金は 払って あります。\n弁当は、私の 机に 置いて おいて ください。\nすみませんが、よろしく お願いします。\n10月4日 10:30\nロン",
    note: null,
  },
  {
    id: 53,
    section: "読解",
    q: "25. どうして「私」は 内村さんと 一緒に 山に 行くことに しましたか。",
    options: [
      "内村さんが 山で 昼ご飯を 作って くれると 言ったから",
      "内村さんに 山を 好きに なって もらいたかったから",
      "内村さんも 山が 好きなことが わかったから",
      "内村さんの 好きな山に 登って みたかったから",
    ],
    answer: 3,
    passage:
      "私の 趣味は 山に 登ることです。山の いちばん上で 景色を 見ながら 昼ご飯を 食べるのが、私の 楽しみです。\n\n先週、会社の 先輩の 内村さんと 話していて、内村さんも 山が 好きなことが わかりました。それで、私が よく 行く 山に、一緒に 行くことに なりました。\n\n週末、私たちは 山の 近くの 駅で 会って、山に 向かいました。1時間ぐらい 登ったとき、内村さんが 止まって、「珍しい花が 咲いて いますね。ここで 少し 休みませんか。」と 言ったので、休むことに しました。\n\n内村さんは「少し」と 言ったのに、ずっと 花の 写真を 撮っていて、12時に なって しまいました。それで、私たちは 弁当を 食べました。私は ①ちょっと 残念でした。山の 上で 食べたかったからです。弁当を 食べながら、内村さんは 撮った 写真を 見せて くれました。とても きれいだったので、私も 撮って みたく なりました。\n\n昼ご飯の あとで、内村さんは 山の 花の 上手な 撮り方を 教えて くれました。私も 少し 撮って みて、楽しく なりました。そして、2時間ぐらい 写真を 撮って、山を おりました。山に 行って、上まで 登らないで 帰ったのは 初めてでした。でも、とても いい 一日でした。内村さんと 山に 行って、私は ②山の 新しい 楽しみを 知りました。また 一緒に 山に 行きたいと 思います。",
    note: null,
  },
  {
    id: 54,
    section: "読解",
    q: "26. どうして ①「ちょっと 残念」でしたか。",
    options: [
      "山の いちばん上で 弁当が 食べられなかったから",
      "持って きた 弁当が おいしく なかったから",
      "咲いて いた 花が あまり きれいでは なかったから",
      "花の 写真を 撮る 時間が 短かったから",
    ],
    answer: 1,
    passage:
      "私の 趣味は 山に 登ることです。山の いちばん上で 景色を 見ながら 昼ご飯を 食べるのが、私の 楽しみです。\n\n先週、会社の 先輩の 内村さんと 話していて、内村さんも 山が 好きなことが わかりました。それで、私が よく 行く 山に、一緒に 行くことに なりました。\n\n週末、私たちは 山の 近くの 駅で 会って、山に 向かいました。1時間ぐらい 登ったとき、内村さんが 止まって、「珍しい花が 咲いて いますね。ここで 少し 休みませんか。」と 言ったので、休むことに しました。\n\n内村さんは「少し」と 言ったのに、ずっと 花の 写真を 撮っていて、12時に なって しまいました。それで、私たちは 弁当を 食べました。私は ①ちょっと 残念でした。山の 上で 食べたかったからです。弁当を 食べながら、内村さんは 撮った 写真を 見せて くれました。とても きれいだったので、私も 撮って みたく なりました。\n\n昼ご飯の あとで、内村さんは 山の 花の 上手な 撮り方を 教えて くれました。私も 少し 撮って みて、楽しく なりました。そして、2時間ぐらい 写真を 撮って、山を おりました。山に 行って、上まで 登らないで 帰ったのは 初めてでした。でも、とても いい 一日でした。内村さんと 山に 行って、私は ②山の 新しい 楽しみを 知りました。また 一緒に 山に 行きたいと 思います。",
    note: null,
  },
  {
    id: 55,
    section: "読解",
    q: "27. ②「山の 新しい 楽しみ」と ありますが、どんな 楽しみですか。",
    options: [
      "山の 上で 景色を 見る 楽しみ",
      "山の 上で 昼ご飯を 食べる 楽しみ",
      "山の 登り方を 人に 教える 楽しみ",
      "山に 咲いて いる花の 写真を 撮る 楽しみ",
    ],
    answer: 4,
    passage:
      "私の 趣味は 山に 登ることです。山の いちばん上で 景色を 見ながら 昼ご飯を 食べるのが、私の 楽しみです。\n\n先週、会社の 先輩の 内村さんと 話していて、内村さんも 山が 好きなことが わかりました。それで、私が よく 行く 山に、一緒に 行くことに なりました。\n\n週末、私たちは 山の 近くの 駅で 会って、山に 向かいました。1時間ぐらい 登ったとき、内村さんが 止まって、「珍しい花が 咲いて いますね。ここで 少し 休みませんか。」と 言ったので、休むことに しました。\n\n内村さんは「少し」と 言ったのに、ずっと 花の 写真を 撮っていて、12時に なって しまいました。それで、私たちは 弁当を 食べました。私は ①ちょっと 残念でした。山の 上で 食べたかったからです。弁当を 食べながら、内村さんは 撮った 写真を 見せて くれました。とても きれいだったので、私も 撮って みたく なりました。\n\n昼ご飯の あとで、内村さんは 山の 花の 上手な 撮り方を 教えて くれました。私も 少し 撮って みて、楽しく なりました。そして、2時間ぐらい 写真を 撮って、山を おりました。山に 行って、上まで 登らないで 帰ったのは 初めてでした。でも、とても いい 一日でした。内村さんと 山に 行って、私は ②山の 新しい 楽しみを 知りました。また 一緒に 山に 行きたいと 思います。",
    note: null,
  },
  {
    id: 56,
    section: "読解",
    q: "28. 料理の 教室は いくら かかりますか。",
    options: ["1か月 500円", "1回 500円", "1回 100円", "ただ"],
    answer: 2,
    passage:
      "山川市「国際教室」の お知らせ\n\nおべんとうを 作りましょう!\n外国人と 日本人。30人 以内。\n子供を 連れて 来ても いいです。\n●時間: 毎週(火) 10:00～12:30\n●場所: スーパー「みどり」4階\n●お金: 1回 500円\n\nテニスを しましょう!\n18歳 以上の 人。外国人 15人 以内、日本人 15人 以内。\n●時間: 毎週(水) 15:00～18:00\n●場所: 山川運動場\n●お金: 1か月 500円\n\nジョギングを しましょう!\n15歳 以上の 外国人と 日本人。\n子供を 連れて 来ても いいです。\n●時間: 毎週(土) 10:30～12:00\n●場所: 山川公園入口\n●お金: ただです。\n\n日本語で 話しましょう!\n15歳 以上の 人。外国人 30人 以内、日本人 30人 以内。\n●時間: 毎週(日) 14:00～16:00\n●場所: 山川市図書館 3階\n●お金: 1回 100円",
    note: null,
  },
  {
    id: 57,
    section: "読解",
    q: "29. リーさんは、朝9時から 夕方5時まで はたらいて います。休みは 水曜日と 日曜日です。いつも すわって 仕事を して いるので、運動したいと 思っています。リーさんは、どの 教室に 行きますか。",
    options: ["料理", "テニス", "ジョギング", "日本語"],
    answer: 3,
    passage:
      "山川市「国際教室」の お知らせ\n\nおべんとうを 作りましょう!\n外国人と 日本人。30人 以内。\n子供を 連れて 来ても いいです。\n●時間: 毎週(火) 10:00～12:30\n●場所: スーパー「みどり」4階\n●お金: 1回 500円\n\nテニスを しましょう!\n18歳 以上の 人。外国人 15人 以内、日本人 15人 以内。\n●時間: 毎週(水) 15:00～18:00\n●場所: 山川運動場\n●お金: 1か月 500円\n\nジョギングを しましょう!\n15歳 以上の 外国人と 日本人。\n子供を 連れて 来ても いいです。\n●時間: 毎週(土) 10:30～12:00\n●場所: 山川公園入口\n●お金: ただです。\n\n日本語で 話しましょう!\n15歳 以上の 人。外国人 30人 以内、日本人 30人 以内。\n●時間: 毎週(日) 14:00～16:00\n●場所: 山川市図書館 3階\n●お金: 1回 100円",
    note: null,
  },
  {
    id: 58,
    section: "聴解",
    q: "問題1・1番：男の人は最初に何をしますか?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    passage: null,
    note: "image",
    image: "images/1.png",
  },
  {
    id: 59,
    section: "聴解",
    q: "問題1・2番：女の人はいつ受付を始めますか?",
    options: ["21日 午後6時", "21日 午後6時半", "22日 午後6時", "22日 午後6時半"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 60,
    section: "聴解",
    q: "問題1・3番：女の留学生はこれから、新しくどんな聞き取りの練習を始めますか?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    passage: null,
    note: "image",
    image: "images/2.png",
  },
  {
    id: 61,
    section: "聴解",
    q: "問題1・4番：女の人はおにぎりを何個買いますか?",
    options: ["3個", "4個", "5個", "6個"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 62,
    section: "聴解",
    q: "問題1・5番：女のアルバイトの人はまず何をしますか?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    passage: null,
    note: "image",
    image: "images/3.png",
  },
  {
    id: 63,
    section: "聴解",
    q: "問題1・6番：子供はお客さんのところにどれを持っていきますか?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    passage: null,
    note: "image",
    image: "images/4.png",
  },
  {
    id: 64,
    section: "聴解",
    q: "問題1・7番：男の人はこの後、最初にどこに行きますか?",
    options: ["郵便局", "駅", "公園", "会社"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 65,
    section: "聴解",
    q: "問題1・8番：学生は建物に入るとき、自分の靴をどうしますか?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    passage: null,
    note: "image",
    image: "images/5.png",
  },
  {
    id: 66,
    section: "聴解",
    q: "問題2・1番：お母さんの誕生日に何をする人が一番多いと言っていますか?",
    options: [
      "いっしょに しょくじを する人",
      "花や ようふくを プレゼントする人",
      "てがみや カードを おくる人",
      "ケーキを つくる人",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 67,
    section: "聴解",
    q: "問題2・2番：男のアルバイトの人はどうして遅れましたか?",
    options: [
      "アルバイトの時間を まちがえたから",
      "みちが こんで いたから",
      "じゅぎょうが おそく おわったから",
      "けいたいでんわを とりに かえったから",
    ],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 68,
    section: "聴解",
    q: "問題2・3番：男の人はどうしてレストランに電話をかけましたか?",
    options: [
      "よやくの 時間を かえたいから",
      "行く 人の かずが かわったから",
      "サラダの しゅるいを かえたいから",
      "ケーキの しゅるいを かえたいから",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 69,
    section: "聴解",
    q: "問題2・4番：女の人はどうして去年国に帰りませんでしたか?",
    options: [
      "子どもが 生まれたから",
      "しごとが いそがしかったから",
      "りょこうに 行ったから",
      "安い チケットが なかったから",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 70,
    section: "聴解",
    q: "問題2・5番：先生はどんなことが一番良くなかったと言っていますか?",
    options: [
      "ながさが みじかかったこと",
      "じが きたなかったこと",
      "ぶんぼうを まちがえたこと",
      "かんじが 書けなかったこと",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 71,
    section: "聴解",
    q: "問題2・6番：女の学生は夏休みに何がしたいと言っていますか?",
    options: ["りょかんの アルバイト", "たてものを 見る りょこう", "りょうりを おしえる しごと", "ダンスの べんきょう"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 72,
    section: "聴解",
    q: "問題2・7番：男の人は最近どのぐらい運動をしていますか?",
    options: ["毎日", "1週間に 2回", "1週間に 1回", "1ヶ月に 1回"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 73,
    section: "聴解",
    q: "問題3・1番：ネクタイをえらんでいます。友だちの意見が聞きたいです。何と言いますか。",
    options: ["どっちが いい", "これ 着ても いい", "両方いいと 思うよ"],
    answer: 1,
    passage: null,
    note: "image",
    image: "images/6.png",
  },
  {
    id: 74,
    section: "聴解",
    q: "問題3・2番：長く会ってなかった人に会いました。何と言いますか。",
    options: ["1", "2", "3"],
    answer: 3,
    passage: null,
    note: "image",
    image: "images/7.png",
  },
  {
    id: 75,
    section: "聴解",
    q: "問題3・3番：熱があるので、学校を休みたいです。電話で先生に何と言いますか。",
    options: ["1", "2", "3"],
    answer: 2,
    passage: null,
    note: "image",
    image: "images/8.png",
  },
  {
    id: 76,
    section: "聴解",
    q: "問題3・4番：友達が教科書を忘れました。友達に何と言いますか。",
    options: ["1", "2", "3"],
    answer: 1,
    passage: null,
    note: "image",
    image: "images/9.png",
  },
  {
    id: 77,
    section: "聴解",
    q: "問題3・5番：うちに誰か来ました。知らない人です。何と言いますか。",
    options: ["1", "2", "3"],
    answer: 2,
    passage: null,
    note: "image",
    image: "images/10.png",
  },
  {
    id: 78,
    section: "聴解",
    q: "問題4・1番：男「ご家族はお元気ですか。」女：",
    options: ["1", "2", "3"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 79,
    section: "聴解",
    q: "問題4・2番：女「明日、何で行こうか。」男：",
    options: ["1", "2", "3"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 80,
    section: "聴解",
    q: "問題4・3番：男「はしもとさん、教科書の20ページのところをちょっと教えてくれない？」女：",
    options: ["1", "2", "3"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 81,
    section: "聴解",
    q: "問題4・4番：女「子供の時、何になりたかったですか。」男：",
    options: ["1", "2", "3"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 82,
    section: "聴解",
    q: "問題4・5番：女「田中さん、田中さんの会社はどんなことをしているんですか。」男：",
    options: ["1", "2", "3"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 83,
    section: "聴解",
    q: "問題4・6番：女「みんな集まったのに、池田さんは来ませんね。」男：",
    options: ["1", "2", "3"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 84,
    section: "聴解",
    q: "問題4・7番：男「鈴木さん、明日のサッカーの練習、雨でもやろうね。」女：",
    options: ["1", "2", "3"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 85,
    section: "聴解",
    q: "問題4・8番：女「今日のパーティー、ジュンさん来ないかもしれないよ。」男：",
    options: ["1", "2", "3"],
    answer: 1,
    passage: null,
    note: null,
  },
];
let pool = [...QUIZ_DATA],
  current = 0,
  answers = {};

const quizEl = document.getElementById("quiz");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

function esc(v) {
  return String(v).replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[m],
  );
}

function render() {
  const q = pool[current];
  progressText.textContent = `${current + 1} / ${pool.length}`;
  progressBar.style.width = `${((current + 1) / pool.length) * 100}%`;
  const selected = answers[q.id];
  const options = q.options
    .map((o, i) => {
      let cls = "option";
      if (selected === i + 1) cls += " selected";
      if (selected !== undefined) {
        if (i + 1 === q.answer) cls += " correct";
        else if (selected === i + 1) cls += " wrong";
      }
      const display = q.note === "image" && !q.image ? `<div class="dev-placeholder">${esc(o)}</div>` : esc(o);
      return `<button class="${cls}" data-index="${i + 1}"><span class="letter">${String.fromCharCode(65 + i)}</span><span>${display}</span></button>`;
    })
    .join("");
  const media = q.image ? `<div class="question-media"><img src="${q.image}" alt="Câu ${q.id}" /></div>` : "";
  quizEl.innerHTML = `<article class="card">
    <div class="meta"><span class="badge">${esc(q.section)}</span>${q.note === "image" ? '<span class="badge tag">DEV: thêm ảnh/audio</span>' : ""}</div>
    <div class="question-no">Câu ${q.id}</div>
    <div class="prompt">${q.q}</div>
    ${media}
    ${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}
    <div class="options">${options}</div>
  </article>`;
  quizEl.querySelectorAll(".option").forEach((btn) =>
    btn.addEventListener("click", () => {
      answers[q.id] = Number(btn.dataset.index);
      render();
    }),
  );
  prevBtn.disabled = current === 0;
  nextBtn.classList.toggle("hidden", current === pool.length - 1);
}
function resetQuiz() {
  answers = {};
  current = 0;
  render();
}
prevBtn.onclick = () => {
  if (current > 0) {
    current--;
    render();
  }
};
nextBtn.onclick = () => {
  if (current < pool.length - 1) {
    current++;
    render();
  }
};
resetBtn.onclick = resetQuiz;

document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    pool = f === "all" ? [...QUIZ_DATA] : QUIZ_DATA.filter((q) => q.section === f);
    current = 0;
    render();
  }),
);
document.getElementById("countAll").textContent = QUIZ_DATA.length;
render();
