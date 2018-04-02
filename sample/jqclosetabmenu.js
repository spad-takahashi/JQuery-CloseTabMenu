// 出したらしまえるタブメニュー
$(function(){
	// 設定
	var menu = "#menu"; // メニューボタンのidを指定
	var target = "#target"; // 表示したいコンテンツのidを指定
	var speed = 200; // アニメーションの速度（ミリ秒） 遅いと連続で複数押した時に要素が残るので注意
	
	$($(menu).children('li')).click(function() {
		var mbclass = '.' + $(this).attr('class'); // 押したメニューボタンのクラスを取得
		var cnt = $(target).children(mbclass); // 押したメニューボタンと同じクラスを持つコンテンツを変数化
		var tactive = $(target).children('li.active'); // ターゲットがアクティブの状態を変数化
		if($(this).hasClass('active')){ // 押したメニューがアクティブ状態の時は閉じるだけの処理
			$(tactive).slideUp(speed);　// アクティブをフェードアウトさせる
			$(tactive).removeClass('active'); //クラスを外す
			$(this).removeClass('active'); //クラスを外す
			} else{　// それ以外
			$(tactive).fadeOut(speed);　//アクティブをフェードアウト
			$('.active').removeClass('active'); //クラスを外す
			setTimeout (function(){　// 前の要素を残さないようにsetTimeoutで時差を付けて開く処理
				$(mbclass).addClass('active'); // 押したボタンにactiveクラスを付与
				$(cnt).addClass('active'); // ターゲットにactiveクラスを付与
				$(cnt).fadeIn(speed);
			},speed); // speed分遅らせる
		}
	});
	$('#style').click(function() {
		$('section').toggleClass('style');
		$(this).text("戻す");

	});
});
