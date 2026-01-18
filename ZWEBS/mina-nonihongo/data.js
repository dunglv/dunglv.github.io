const minaData = [
    {
        id: 1,
        title: "Bài 1: Giới thiệu bản thân",
        vocab: [
            { kanji: "私", kana: "わたし", meaning: "Tôi" },
            { kanji: "あなた", kana: "あなた", meaning: "Bạn" },
            { kanji: "あの人", kana: "あのひと", meaning: "Người kia" },
            { kanji: "先生", kana: "せんせい", meaning: "Giáo viên" },
            { kanji: "学生", kana: "がくせい", meaning: "Học sinh" },
            { kanji: "会社員", kana: "かいしゃいん", meaning: "Nhân viên công ty" },
            { kanji: "銀行員", kana: "ぎんこういん", meaning: "Nhân viên ngân hàng" },
            { kanji: "医者", kana: "いしゃ", meaning: "Bác sĩ" },
            { kanji: "研究者", kana: "けんきゅうしゃ", meaning: "Nhà nghiên cứu" },
            { kanji: "大学", kana: "だいがく", meaning: "Đại học" },
            { kanji: "病院", kana: "びょういん", meaning: "Bệnh viện" },
            { kanji: "誰", kana: "だれ", meaning: "Ai" },
            { kanji: "歳", kana: "さい", meaning: "Tuổi" },
            { kanji: "何歳", kana: "なんさい", meaning: "Mấy tuổi" },
            { kanji: "はい", kana: "はい", meaning: "Vâng" },
            { kanji: "いいえ", kana: "いいえ", meaning: "Không" }
        ],
        grammar: [
            { title: "N1 は N2 です", content: "Danh từ 1 là Danh từ 2.<br>Ví dụ: 私は学生です (Tôi là học sinh)." },
            { title: "N1 は N2 じゃありません", content: "Danh từ 1 không phải là Danh từ 2.<br>Ví dụ: 私は医者じゃありません (Tôi không phải là bác sĩ)." },
            { title: "N1 は N2 ですか", content: "Câu hỏi: N1 có phải là N2 không?<br>Ví dụ: あなたは学生ですか? (Bạn có phải là học sinh không?)." },
            { title: "N も", content: "Trợ từ 'mo' - Cũng.<br>Ví dụ: 私も会社員です (Tôi cũng là nhân viên công ty)." }
        ]
    },
    {
        id: 2,
        title: "Bài 2: Cái này, cái đó, cái kia",
        vocab: [
            { kanji: "これ", kana: "これ", meaning: "Cái này" },
            { kanji: "それ", kana: "それ", meaning: "Cái đó" },
            { kanji: "あれ", kana: "あれ", meaning: "Cái kia" },
            { kanji: "この", kana: "この", meaning: "Cái ~ này" },
            { kanji: "その", kana: "その", meaning: "Cái ~ đó" },
            { kanji: "あの", kana: "あの", meaning: "Cái ~ kia" },
            { kanji: "本", kana: "ほん", meaning: "Sách" },
            { kanji: "辞書", kana: "じしょ", meaning: "Từ điển" },
            { kanji: "雑誌", kana: "ざっし", meaning: "Tạp chí" },
            { kanji: "新聞", kana: "しんぶん", meaning: "Báo" },
            { kanji: "眼鏡", kana: "めがね", meaning: "Kính mạng" },
            { kanji: "鍵", kana: "かぎ", meaning: "Chìa khóa" },
            { kanji: "時計", kana: "とけい", meaning: "Đồng hồ" },
            { kanji: "傘", kana: "かさ", meaning: "Cái dù" }
        ],
        grammar: [
            { title: "これ/それ/あれ は N です", content: "Cái này/đó/kia là N." },
            { title: "このN/そのN/あのN", content: "Danh từ này/đó/kia." },
            { title: "そうです/そうじゃありません", content: "Đúng vậy/Không phải vậy." },
            { title: "N1 の N2", content: "N2 của N1 (Sở hữu)." }
        ]
    },
    {
        id: 3,
        title: "Bài 3: Ở đây, ở đó, ở kia",
        vocab: [
            { kanji: "ここ", kana: "ここ", meaning: "Chỗ này" },
            { kanji: "そこ", kana: "そこ", meaning: "Chỗ đó" },
            { kanji: "あそこ", kana: "あそこ", meaning: "Chỗ kia" },
            { kanji: "どこ", kana: "どこ", meaning: "Ở đâu" },
            { kanji: "教室", kana: "きょうしつ", meaning: "Lớp học" },
            { kanji: "食堂", kana: "しょくどう", meaning: "Nhà ăn" },
            { kanji: "事務所", kana: "じむしょ", meaning: "Văn phòng" },
            { kanji: "会議室", kana: "かいぎしつ", meaning: "Phòng họp" },
            { kanji: "受付", kana: "うけつけ", meaning: "Quầy tân lễ" },
            { kanji: "部屋", kana: "へや", meaning: "Căn phòng" },
            { kanji: "トイレ", kana: "といれ", meaning: "Nhà vệ sinh" },
            { kanji: "階段", kana: "かいだん", meaning: "Cầu thang" },
            { kanji: "エレベーター", kana: "えれべーたー", meaning: "Thang máy" },
            { kanji: "国", kana: "くに", meaning: "Đất nước" }
        ],
        grammar: [
            { title: "ここ/そこ/あそこ は N です", content: "Chỗ này/đó/kia là N." },
            { title: "N は ここ/そこ/あそこ です", content: "N ở chỗ này/đó/kia." },
            { title: "En la N desu", content: "Hỏi về giá tiền: Cái này bao nhiêu tiền?" }
        ]
    },
    {
        id: 4,
        title: "Bài 4: Thời gian, Giờ giấc",
        vocab: [
            { kanji: "起きる", kana: "おきる", meaning: "Thức dậy" },
            { kanji: "寝る", kana: "ねる", meaning: "Ngủ" },
            { kanji: "働く", kana: "はたらく", meaning: "Làm việc" },
            { kanji: "休む", kana: "やすむ", meaning: "Nghỉ ngơi" },
            { kanji: "勉強する", kana: "べんきょうする", meaning: "Học tập" },
            { kanji: "終わる", kana: "おわる", meaning: "Kết thúc" },
            { kanji: "デパ－ト", kana: "でぱぽーと", meaning: "Bách hóa" },
            { kanji: "銀行", kana: "ぎんこう", meaning: "Ngân hàng" },
            { kanji: "郵便局", kana: "ゆうびんきょく", meaning: "Bưu điện" },
            { kanji: "図書館", kana: "としょかん", meaning: "Thư viện" },
            { kanji: "今", kana: "いま", meaning: "Bây giờ" },
            { kanji: "～時", kana: "～じ", meaning: "~ giờ" },
            { kanji: "～分", kana: "～ふん", meaning: "~ phút" }
        ],
        grammar: []
    },
    {
        id: 5,
        title: "Bài 5: Đi đâu, Về đâu",
        vocab: [
            { kanji: "行きます", kana: "いきます", meaning: "Đi" },
            { kanji: "来ます", kana: "きます", meaning: "Đến" },
            { kanji: "帰ります", kana: "かえります", meaning: "Về" },
            { kanji: "学校", kana: "がっこう", meaning: "Trường học" },
            { kanji: "スーパー", kana: "すーぱー", meaning: "Siêu thị" },
            { kanji: "駅", kana: "えき", meaning: "Nhà ga" },
            { kanji: "飛行機", kana: "ひこうき", meaning: "Máy bay" },
            { kanji: "船", kana: "ふね", meaning: "Thuyền" },
            { kanji: "電車", kana: "でんしゃ", meaning: "Tàu điện" },
            { kanji: "地下鉄", kana: "ちかてつ", meaning: "Tàu điện ngầm" },
            { kanji: "新幹線", kana: "しんかんせん", meaning: "Tàu siêu tốc" },
            { kanji: "バス", kana: "ばす", meaning: "Xe buýt" },
            { kanji: "タクシー", kana: "たくしー", meaning: "Taxi" },
            { kanji: "自転車", kana: "じてんしゃ", meaning: "Xe đạp" },
            { kanji: "歩いて", kana: "あるいて", meaning: "Đi bộ" },
            { kanji: "人", kana: "ひと", meaning: "Người" },
            { kanji: "友達", kana: "ともだち", meaning: "Bạn bè" },
            { kanji: "彼", kana: "かれ", meaning: "Anh ấy/Bạn trai" },
            { kanji: "彼女", kana: "かのじょ", meaning: "Chị ấy/Bạn gái" },
            { kanji: "家族", kana: "かぞく", meaning: "Gia đình" },
            { kanji: "一人で", kana: "ひとりで", meaning: "Một mình" },
            { kanji: "先週", kana: "せんしゅう", meaning: "Tuần trước" },
            { kanji: "今週", kana: "こんしゅう", meaning: "Tuần này" },
            { kanji: "来週", kana: "らいしゅう", meaning: "Tuần sau" },
            { kanji: "先月", kana: "せんげつ", meaning: "Tháng trước" },
            { kanji: "今月", kana: "こんげつ", meaning: "Tháng này" },
            { kanji: "来月", kana: "らいげつ", meaning: "Tháng sau" },
            { kanji: "去年", kana: "きょねん", meaning: "Năm ngoái" },
            { kanji: "今年", kana: "ことし", meaning: "Năm nay" },
            { kanji: "来年", kana: "らいねん", meaning: "Năm sau" },
            { kanji: "～月", kana: "～がつ", meaning: "Tháng ~" },
            { kanji: "何月", kana: "なんがつ", meaning: "Tháng mấy" },
            { kanji: "1日", kana: "ついたち", meaning: "Mùng 1" },
            { kanji: "～日", kana: "～にち", meaning: "Ngày ~" },
            { kanji: "何日", kana: "なんにち", meaning: "Ngày mấy" },
            { kanji: "いつ", kana: "いつ", meaning: "Khi nào" },
            { kanji: "誕生日", kana: "たんじょうび", meaning: "Sinh nhật" }
        ],
        grammar: [
            { title: "N (Địa điểm) へ 行きます/来ます/帰ります", content: "Đi/Đến/Về đâu đó.<br>Ví dụ: 学校 へ 行きます (Tôi đi đến trường).<br>Lưu ý: Trợ từ へ đọc là 'e'." },
            { title: "どこ [へ] も 行きません", content: "Không đi đâu cả (Phủ định hoàn toàn).<br>Ví dụ: どこ [へ] も 行きませんでした (Tôi đã không đi đâu cả)." },
            { title: "N (Phương tiện) で 行きます", content: "Đi bằng phương tiện gì.<br>Ví dụ: 電車 で 行きます (Tôi đi bằng tàu điện).<br>Ngoại lệ: 歩いて (Đi bộ) không dùng trợ từ で." },
            { title: "N (Người/Động vật) と 行きます", content: "Đi cùng với ai.<br>Ví dụ: 家族 と 日本 へ 来ました (Tôi đã đến Nhật cùng gia đình).<br>Một mình: 一人で (Không dùng と)." },
            { title: "いつ (Khi nào)", content: "Hỏi về thời gian.<br>Ví dụ: いつ 日本 へ 来ましたか (Bạn đến Nhật bao giờ?)" }
        ]
    },
    {
        id: 6,
        title: "Bài 6: Ăn uống, Làm gì",
        vocab: [
            { kanji: "食べます", kana: "たべます", meaning: "Ăn" },
            { kanji: "飲みます", kana: "のみます", meaning: "Uống" },
            { kanji: "吸います", kana: "すいます", meaning: "Hút (thuốc)" },
            { kanji: "見ます", kana: "みます", meaning: "Xem, Nhìn" },
            { kanji: "聞きます", kana: "ききます", meaning: "Nghe" },
            { kanji: "読みます", kana: "よみます", meaning: "Đọc" },
            { kanji: "書きます", kana: "かきます", meaning: "Viết" },
            { kanji: "買います", kana: "かいます", meaning: "Mua" },
            { kanji: "撮ります", kana: "とります", meaning: "Chụp (ảnh)" },
            { kanji: "します", kana: "します", meaning: "Làm" },
            { kanji: "会います", kana: "あいます", meaning: "Gặp bạn" },
            { kanji: "ご飯", kana: "ごはん", meaning: "Cơm" },
            { kanji: "水", kana: "みず", meaning: "Nước" },
            { kanji: "お茶", kana: "おちゃ", meaning: "Trà" },
            { kanji: "映画", kana: "えいが", meaning: "Phim" },
            { kanji: "手紙", kana: "てがみ", meaning: "Thư" },
            { kanji: "レポート", kana: "れぽーと", meaning: "Báo cáo" },
            { kanji: "写真", kana: "しゃしん", meaning: "Bức ảnh" },
            { kanji: "店", kana: "みせ", meaning: "Cửa hàng" },
            { kanji: "庭", kana: "にわ", meaning: "Sân vườn" },
            { kanji: "宿題", kana: "しゅくだい", meaning: "Bài tập về nhà" },
            { kanji: "お花見", kana: "おはなみ", meaning: "Ngắm hoa" }
        ],
        grammar: [
            { title: "今～時～分です", content: "Bây giờ là ~ giờ ~ phút.<br>Ví dụ: 今 9時 30分 です (Bây giờ là 9 giờ 30)." },
            { title: "Vます / Vません / Vました", content: "Động từ thể lịch sự (Khẳng định - Phủ định - Quá khứ).<br>Ví dụ: 毎朝 6時に 起きます (Mỗi sáng tôi dậy lúc 6h)." },
            { title: "N (Thời gian) に V", content: "Trợ từ 'ni' chỉ thời điểm hành động xảy ra.<br>Ví dụ: 6時半 に 起きます (Tôi dậy lúc 6h30)." },
            { title: "N1 から N2 まで", content: "Từ N1 đến N2 (Thời gian/Địa điểm).<br>Ví dụ: 9時 から 5時 まで 働きます (Tôi làm việc từ 9h đến 5h)." },
            { title: "N1 と N2", content: "N1 và N2.<br>Ví dụ: 土曜日 と 日曜日 休みます (Tôi nghỉ thứ 7 và chủ nhật)." }
        ]
    },
    {
        id: 7,
        title: "Bài 7: Tặng quà, Dụng cụ",
        vocab: [
            { kanji: "切ります", kana: "きります", meaning: "Cắt" },
            { kanji: "送ります", kana: "おくります", meaning: "Gửi" },
            { kanji: "あげます", kana: "あげます", meaning: "Tặng" },
            { kanji: "もらいます", kana: "もらいます", meaning: "Nhận" },
            { kanji: "貸します", kana: "かします", meaning: "Cho mượn" },
            { kanji: "借ります", kana: "かります", meaning: "Mượn" },
            { kanji: "教えます", kana: "おしえます", meaning: "Dạy" },
            { kanji: "習います", kana: "ならいます", meaning: "Học (từ ai)" },
            { kanji: "手", kana: "て", meaning: "Tay" },
            { kanji: "箸", kana: "はし", meaning: "Đũa" },
            { kanji: "スプーン", kana: "すぷーん", meaning: "Thìa" },
            { kanji: "ナイフ", kana: "ないふ", meaning: "Dao" },
            { kanji: "フォーク", kana: "ふぉーく", meaning: "Dĩa" },
            { kanji: "ハサミ", kana: "はさみ", meaning: "Kéo" },
            { kanji: "パソコン", kana: "ぱそこん", meaning: "Máy tính cá nhân" },
            { kanji: "ケータイ", kana: "けーたい", meaning: "Điện thoại di động" },
            { kanji: "消しゴム", kana: "けしごむ", meaning: "Cục tẩy" },
            { kanji: "紙", kana: "かみ", meaning: "Giấy" },
            { kanji: "花", kana: "はな", meaning: "Hoa" },
            { kanji: "プレゼント", kana: "ぷれぜんと", meaning: "Quà tặng" },
            { kanji: "荷物", kana: "にもつ", meaning: "Hành lý" },
            { kanji: "お金", kana: "おかね", meaning: "Tiền" },
            { kanji: "切符", kana: "きっぷ", meaning: "Vé" },
            { kanji: "クリスマス", kana: "くりすます", meaning: "Giáng sinh" },
            { kanji: "もう", kana: "もう", meaning: "Đã... rồi" },
            { kanji: "まだ", kana: "まだ", meaning: "Vẫn chưa" },
            { kanji: "これから", kana: "これから", meaning: "Từ bây giờ" }
        ],
        grammar: [
            { title: "N (Phương tiện/Công cụ) で Vます", content: "Làm bằng cái gì.<br>Ví dụ: 箸 で 食べます (Ăn bằng đũa).<br>日本語 で レポートを書きます (Viết báo cáo bằng tiếng Nhật)." },
            { title: "Từ/Câu は ～語 で 何ですか", content: "Cái này tiếng ~ nói là gì?<br>Ví dụ: 「Cảm ơn」は 日本語で 何ですか (Cảm ơn tiếng Nhật là gì?)." },
            { title: "N (Người) に あげます/貸します/教えます", content: "Làm cho ai (Tặng/Cho mượn/Dạy).<br>Ví dụ: 彼女 に 花 を あげます (Tặng hoa cho bạn gái)." },
            { title: "N (Người) に もらいます/借ります/習います", content: "Nhận từ ai (Nhận/Mượn/Học).<br>Ví dụ: 母 に プレゼント を もらいました (Đã nhận quà từ mẹ)." },
            { title: "もう Vました", content: "Đã làm gì rồi.<br>Ví dụ: もう ご飯を 食べましたか (Bạn đã ăn cơm chưa?)." }
        ]
    },
    {
        id: 8,
        title: "Bài 8: Tính từ",
        vocab: [
            { kanji: "ハンサム", kana: "はんさむ", meaning: "Đẹp trai" },
            { kanji: "きれい", kana: "きれい", meaning: "Đẹp, Sạch sẽ" },
            { kanji: "静か", kana: "しずか", meaning: "Yên tĩnh" },
            { kanji: "賑やか", kana: "にぎやか", meaning: "Ná nhiệt" },
            { kanji: "有名", kana: "ゆうめい", meaning: "Nổi tiếng" },
            { kanji: "親切", kana: "しんせつ", meaning: "Tốt bụng" },
            { kanji: "元気", kana: "げんき", meaning: "Khỏe mạnh" },
            { kanji: "暇", kana: "ひま", meaning: "Rảnh rỗi" },
            { kanji: "便利", kana: "べんり", meaning: "Tiện lợi" },
            { kanji: "すてき", kana: "すてき", meaning: "Đẹp, hay" },
            { kanji: "大きい", kana: "おおきい", meaning: "To, lớn" },
            { kanji: "小さい", kana: "ちいさい", meaning: "Nhỏ, bé" },
            { kanji: "新しい", kana: "あたらしい", meaning: "Mới" },
            { kanji: "古い", kana: "ふるい", meaning: "Cũ" },
            { kanji: "いい", kana: "いい", meaning: "Tốt" },
            { kanji: "悪い", kana: "わるい", meaning: "Xấu" },
            { kanji: "暑い", kana: "あつい", meaning: "Nóng (thời tiết)" },
            { kanji: "熱い", kana: "あつい", meaning: "Nóng (vật)" },
            { kanji: "寒い", kana: "さむい", meaning: "Lạnh (thời tiết)" },
            { kanji: "冷たい", kana: "つめたい", meaning: "Lạnh (vật)" },
            { kanji: "難しい", kana: "むずかしい", meaning: "Khó" },
            { kanji: "易しい", kana: "やさしい", meaning: "Dễ" },
            { kanji: "高い", kana: "たかい", meaning: "Cao, Đắt" },
            { kanji: "安い", kana: "やすい", meaning: "Rẻ" },
            { kanji: "低い", kana: "ひくい", meaning: "Thấp" },
            { kanji: "面白い", kana: "おもしろい", meaning: "Thú vị" },
            { kanji: "おいしい", kana: "おいしい", meaning: "Ngon" },
            { kanji: "忙しい", kana: "いそがしい", meaning: "Bận rộn" },
            { kanji: "楽しい", kana: "たのしい", meaning: "Vui vẻ" }
        ],
        grammar: [
            { title: "Tính từ đuôi な / Tính từ đuôi い", content: "Tính từ đuôi な: Bỏ な khi đứng cuối câu (Hansomu desu).<br>Tính từ đuôi い: Giữ nguyên い (Samui desu)." },
            { title: "A (na) じゃありません", content: "Phủ định tính từ đuôi Na.<br>Ví dụ: 彼は ハンサムじゃありません (Anh ấy không đẹp trai)." },
            { title: "A (i) くないです", content: "Phủ định tính từ đuôi I (Bỏ i + kunai).<br>Ví dụ: 今日は 寒くないです (Hôm nay không lạnh)." },
            { title: "A ですか", content: "Câu hỏi tính chất.<br>Ví dụ: 日本の生活は どうですか (Cuộc sống Nhật Bản thế nào?)." },
            { title: "N1 は どんな N2 ですか", content: "N1 là N2 như thế nào?<br>Ví dụ: 奈良は どんな町ですか (Nara là thành phố như thế nào?)." },
            { title: "Và (そして) / Nhưng (が)", content: "Nối tính từ.<br>日本の食べ物は おいしいですが、高いです (Đồ ăn Nhật ngon nhưng đắt)." },
            { title: "とても / あまり", content: "Rất / Không... lắm.<br>とても 寒いです (Rất lạnh).<br>あまり 寒くないです (Không lạnh lắm)." }
        ]
    },
    {
        id: 9,
        title: "Bài 9: Thích, ghét, giỏi, kém",
        vocab: [
            { kanji: "わかります", kana: "わかります", meaning: "Hiểu" },
            { kanji: "あります", kana: "あります", meaning: "Có (vật)" },
            { kanji: "好き", kana: "すき", meaning: "Thích" },
            { kanji: "嫌い", kana: "きらい", meaning: "Ghét" },
            { kanji: "上手", kana: "じょうず", meaning: "Giỏi" },
            { kanji: "下手", kana: "へた", meaning: "Kém" },
            { kanji: "料理", kana: "りょうり", meaning: "Món ăn, Nấu ăn" },
            { kanji: "飲み物", kana: "のみもの", meaning: "Đồ uống" },
            { kanji: "スポーツ", kana: "すぽーつ", meaning: "Thể thao" },
            { kanji: "野球", kana: "やきゅう", meaning: "Bóng chày" },
            { kanji: "ダンス", kana: "だんす", meaning: "Nhảy" },
            { kanji: "音楽", kana: "おんがく", meaning: "Âm nhạc" },
            { kanji: "歌", kana: "うた", meaning: "Bài hát" },
            { kanji: "クラシック", kana: "くらしかっく", meaning: "Nhạc cổ điển" },
            { kanji: "ジャズ", kana: "じゃず", meaning: "Nhạc Jazz" },
            { kanji: "コンサート", kana: "こんさーと", meaning: "Buổi hòa nhạc" },
            { kanji: "カラオケ", kana: "からおけ", meaning: "Karaoke" },
            { kanji: "歌舞伎", kana: "かぶき", meaning: "Kịch Kabuki" },
            { kanji: "絵", kana: "え", meaning: "Tranh" },
            { kanji: "字", kana: "じ", meaning: "Chữ" },
            { kanji: "漢字", kana: "かんじ", meaning: "Hán tự" },
            { kanji: "ひらがな", kana: "ひらがな", meaning: "Chữ Hiragana" },
            { kanji: "カタカナ", kana: "かたかな", meaning: "Chữ Katakana" },
            { kanji: "ローマ字", kana: "ろーまじ", meaning: "Chữ La mã" },
            { kanji: "細かいお金", kana: "こまかいおかね", meaning: "Tiền lẻ" },
            { kanji: "チケット", kana: "ちけっと", meaning: "Vé (xem phim/hòa nhạc)" },
            { kanji: "時間", kana: "じかん", meaning: "Thời gian" },
            { kanji: "用事", kana: "ようじ", meaning: "Việc bận" },
            { kanji: "約束", kana: "やくそく", meaning: "Cuộc hẹn" },
            { kanji: "ご主人", kana: "ごしゅじん", meaning: "Chồng (người khác)" },
            { kanji: "夫/主人", kana: "おっと/しゅじん", meaning: "Chồng (mình)" },
            { kanji: "奥さん", kana: "おくさん", meaning: "Vợ (người khác)" },
            { kanji: "妻/家内", kana: "つま/かない", meaning: "Vợ (mình)" },
            { kanji: "子供", kana: "こども", meaning: "Con cái" },
            { kanji: "あきらめます", kana: "あきらめます", meaning: "Từ bỏ (lịch sự)" },
            { kanji: "残念です", kana: "ざんねんです", meaning: "Đáng tiếc" }
        ],
        grammar: [
            { title: "N が あります / わかります", content: "Có N (Sở hữu) / Hiểu N (Năng lực).<br>Ví dụ: 車 が あります (Có ô tô). 日本語 が わかります (Hiểu tiếng Nhật)." },
            { title: "N が 好き / 嫌い / 上手 / 下手 です", content: "Thích/Ghét/Giỏi/Kém cái gì.<br>Ví dụ: 私は 音楽 が 好きです (Tôi thích âm nhạc)." },
            { title: "どんな N", content: "N như thế nào (Hỏi về thể loại).<br>Ví dụ: どんな スポーツ が 好きですか (Bạn thích môn thể thao nào?)." },
            { title: "S1 から、S2", content: "Vì S1 nên S2 (Nguyên nhân - Kết quả).<br>Ví dụ: 時間がありませんから、新聞を読みません (Vì không có thời gian nên tôi không đọc báo)." },
            { title: "どうして", content: "Tại sao (Hỏi lý do).<br>Trả lời: ... からです (... Vì ...)." }
        ]
    },
    {
        id: 10,
        title: "Bài 10: Vị trí, Sự tồn tại",
        vocab: [
            { kanji: "います", kana: "います", meaning: "Có (người/động vật)" },
            { kanji: "あります", kana: "あります", meaning: "Có (vật)" },
            { kanji: "いろいろ", kana: "いろいろ", meaning: "Nhiều loại" },
            { kanji: "男の人", kana: "おとこのひと", meaning: "Người đàn ông" },
            { kanji: "女の人", kana: "おんなのひと", meaning: "Người phụ nữ" },
            { kanji: "男の子", kana: "おとこのこ", meaning: "Bé trai" },
            { kanji: "女の子", kana: "おんなのこ", meaning: "Bé gái" },
            { kanji: "犬", kana: "いぬ", meaning: "Con chó" },
            { kanji: "猫", kana: "ねこ", meaning: "Con mèo" },
            { kanji: "木", kana: "き", meaning: "Cây" },
            { kanji: "物", kana: "もの", meaning: "Đồ vật" },
            { kanji: "フィルム", kana: "ふぃるむ", meaning: "Phim cuộn" },
            { kanji: "電池", kana: "でんち", meaning: "Pin" },
            { kanji: "箱", kana: "はこ", meaning: "Hộp" },
            { kanji: "スイッチ", kana: "すいっち", meaning: "Công tắc" },
            { kanji: "冷蔵庫", kana: "れいぞうこ", meaning: "Tủ lạnh" },
            { kanji: "テーブル", kana: "てーぶる", meaning: "Bàn" },
            { kanji: "ベッド", kana: "べっど", meaning: "Giường" },
            { kanji: "棚", kana: "たな", meaning: "Giá sách" },
            { kanji: "ドア", kana: "どあ", meaning: "Cửa" },
            { kanji: "窓", kana: "まど", meaning: "Cửa sổ" },
            { kanji: "ポスト", kana: "ぽすと", meaning: "Hộp thư" }
        ],
        grammar: []
    },
    // Adding summary for rest of 50 for brevity but realistically covering titles
    { id: 11, title: "Bài 11: Số lượng - Đếm đồ vật" },
    { id: 12, title: "Bài 12: So sánh - Thời tiết" },
    { id: 13, title: "Bài 13: Mong muốn - Mục đích" },
    { id: 14, title: "Bài 14: Thể Te - Sai khiến" },
    { id: 15, title: "Bài 15: Cho phép - Cấm đoán" },
    { id: 16, title: "Bài 16: Nối câu - Trình tự" },
    { id: 17, title: "Bài 17: Thể Nai - Xin đừng" },
    { id: 18, title: "Bài 18: Thể Từ điển - Có thể" },
    { id: 19, title: "Bài 19: Thể Ta - Kinh nghiệm" },
    { id: 20, title: "Bài 20: Thể Thông thường - Văn nói" },
    { id: 21, title: "Bài 21: Suy nghĩ - Ý kiến" },
    { id: 22, title: "Bài 22: Mệnh đề định ngữ" },
    { id: 23, title: "Bài 23: Lúc... - Khi..." },
    { id: 24, title: "Bài 24: Cho nhận (Ageru/Kureru/Morau)" },
    { id: 25, title: "Bài 25: Câu điều kiện (Nếu/Dù cho)" },
    // Mina II
    { id: 26, title: "Bài 26: Văn nói Ndesu" },
    { id: 27, title: "Bài 27: Thể Khả năng" },
    { id: 28, title: "Bài 28: Vừa làm... vừa làm..." },
    { id: 29, title: "Bài 29: Tự động từ - Trạng thái" },
    { id: 30, title: "Bài 30: Tha động từ - Có sẵn" },
    { id: 31, title: "Bài 31: Thể Ý định" },
    { id: 32, title: "Bài 32: Lời khuyên (Nên/Không nên)" },
    { id: 33, title: "Bài 33: Thể Mệnh lệnh - Cấm chỉ" },
    { id: 34, title: "Bài 34: Làm theo..." },
    { id: 35, title: "Bài 35: Điều kiện (Ba/Nara)" },
    { id: 36, title: "Bài 36: Cố gắng - Trở nên" },
    { id: 37, title: "Bài 37: Thể Bị động" },
    { id: 38, title: "Bài 38: Danh từ hóa động từ (No/Koto)" },
    { id: 39, title: "Bài 39: Nguyên nhân - Lý do (Te/De)" },
    { id: 40, title: "Bài 40: Câu hỏi lồng" },
    { id: 41, title: "Bài 41: Cho nhận (Kính ngữ)" },
    { id: 42, title: "Bài 42: Mục đích (Tame ni/No ni)" },
    { id: 43, title: "Bài 43: Có vẻ (Sou desu)" },
    { id: 44, title: "Bài 44: Quá (Sugiru) - Dễ/Khó (Yasui/Nikui)" },
    { id: 45, title: "Bài 45: Trường hợp (Baai/Noni)" },
    { id: 46, title: "Bài 46: Vừa mới (Bakari/Tokoro)" },
    { id: 47, title: "Bài 47: Nghe nói (Sou desu)" },
    { id: 48, title: "Bài 48: Sai khiến (Sasemasu)" },
    { id: 49, title: "Bài 49: Kính ngữ (Sonkeigo)" },
    { id: 50, title: "Bài 50: Khiêm nhường ngữ (Kenjougo)" }
];

// Helper to fill empty lessons up to 50
// This ensures that even lessons 11-50 have the structure, even if they lack vocab for now.
// Users can see titles and know what's coming.
for (let i = 1; i <= 50; i++) {
    // Find if exists
    let lesson = minaData.find(l => l.id === i);
    if (!lesson) {
        // Fallback title if I missed one, though I covered all
        minaData.push({
            id: i,
            title: `Bài ${i}`,
            vocab: [],
            grammar: []
        });
    } else {
        // Ensure vocab/grammar arrays exist
        if (!lesson.vocab) lesson.vocab = [];
        if (!lesson.grammar) lesson.grammar = [];
    }
}

// Add some sample vocab for L11-50 to allow Review mode to function broadly
const sampleVocabs = [
    { id: 11, v: [{ kanji: "林檎", kana: "りんご", meaning: "Táo" }, { kanji: "蜜柑", kana: "みかん", meaning: "Quýt" }, { kanji: "切手", kana: "きって", meaning: "Tem" }, { kanji: "封筒", kana: "ふうとう", meaning: "Phong bì" }] },
    { id: 12, v: [{ kanji: "簡単", kana: "かんたん", meaning: "Đơn giản" }, { kanji: "近い", kana: "ちかい", meaning: "Gần" }, { kanji: "遠い", kana: "とおい", meaning: "Xa" }, { kanji: "速い", kana: "はやい", meaning: "Nhanh" }] },
    { id: 26, v: [{ kanji: "運動会", kana: "うんどうかい", meaning: "Hội thao" }, { kanji: "場所", kana: "ばしょ", meaning: "Địa điểm" }, { kanji: "ボランティア", kana: "ぼらんてぃあ", meaning: "Tình nguyện" }, { kanji: "弁弁", kana: "べん", meaning: "Tiếng/Giọng (vùng)" }] },
    { id: 50, v: [{ kanji: "参ります", kana: "まいります", meaning: "Đi/Đến (Khiêm nhường)" }, { kanji: "おります", kana: "おります", meaning: "Ở (Khiêm nhường)" }, { kanji: "いただきます", kana: "いただきます", meaning: "Ăn/Uống/Nhận (Khiêm nhường)" }, { kanji: "申します", kana: "もうします", meaning: "Nói (Khiêm nhường)" }] }
];

sampleVocabs.forEach(item => {
    let l = minaData.find(x => x.id === item.id);
    if (l && l.vocab.length === 0) {
        l.vocab = item.v;
    }
});
