import React from 'react'

class Home extends React.Component {

    render() {
        return (
            <div>
                このサイトを開いてくれた方、誠にありがとうございます。<br />
                本サイトは、主に管理人である私がWeb開発のノウハウを学ぶために立ち上げました。

                <p class="blue">------------ここから下はメモ---------</p>
                <p class="blue">npm start</p>
                ローカルサーバを起動してReactアプリを確認<br/>
                ホットリロードに対応
                <p class="blue">npm run build</p>
                本番用ファイルを生成してbuildディレクトリに出力<br/>
                srcとpublicのファイルをひとつにまとめる（バンドル）
                <p class="blue">npm run eject</p>
                BabelやWebpackの設定を変えたいときに使う(あまり使わない)
                <p class="blue">バックエンドとの連携</p>
                docker周りの知識なしでpostgressと連携させるのは難しすぎた（情報が足りない）。
                環境構築は一度できたら簡単なんだけど、最初の一回がマジで難しい。<br></br>
                バックエンドはfirebase + algolia で十分なのでは？<br></br>
                <p class="blue">ひとまずFireBaseでアプリ作成</p>
                rfceでリアクトの雛形を補間してくれる。
            </div>
        );
    }
}

export default Home