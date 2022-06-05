import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import Req from './Req';
import SignOut from './SignOut';
import Board from './Board';
import Game from '../tutorial';
import './css/style2.css';
import './css/styleBoard.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Home"
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
    }

    onChangeTitle(str) {
        this.setState({ message: str });
    }

    render() {
        return (
            <Router>
                <header>
                    <SignOut />
                    <h1>Applied Information Technology Engineer</h1>
                </header>
                <nav>
                    <RouterMenu onChangeTitle={this.onChangeTitle} />
                </nav>
                <main>
                    <div class="imgbox"><img src="https://source.unsplash.com/random" alt=""></img></div>
                    <article>
                        <h3>{this.state.message}</h3>
                        <RouteList />
                    </article>
                </main>
                <aside></aside>
                <footer></footer>
            </Router>
        );
    }
}

class RouterMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { onChangeTitle: this.props.onChangeTitle, };
    };

    render() {
        return (
            //contents変数はこのソースファイルの下部で定義してある
            <ul>
                {contents.map(content =>
                    <li>
                        <Link to={content.path} onClick={(event) => { this.state.onChangeTitle(content.label) }}>{content.label}</Link>
                    </li>
                )}
            </ul>
        );
    }
}

function RouteList(props) {

    return (
        //contents変数はこのソースファイルの下部で定義してある
        <Routes>
            {contents.map(content =>
                <Route path={content.path} element={content.element} />
            )}
        </Routes>
    );
}

const contents = [
    { "path": '/', "label": 'Home', "element": <Home /> },
    { "path": 'board', "label": 'FireBaseで掲示板アプリ', "element": <Board /> },
    { "path": 'req', "label": 'FireBaseでリクエスト検証', "element": <Req /> },
    { "path": 'tutorial', "label": 'tutorial', "element": <Game /> },
    /*
    { "path": 'sandbox', "label": '検証用ページ', "element": null },
    { "path": 'sample1', "label": 'sample1', "element": <Sample1 /> },
    { "path": 'html-css', "label": 'htmlとcssの整理', "element": null },
    { "path": 'shortcut', "label": 'ショートカットの使い方', "element": null },
    { "path": 'chromedev', "label": 'Chromeのデベロッパツール', "element": null },
    { "path": 'jsreg', "label": 'javascript 正規表現', "element": null },
    { "path": 'scraping', "label": 'スクレイピング（企業情報）', "element": null },
    { "path": 'testtool', "label": 'テストツールの導入', "element": null },
    { "path": 'servicenow', "label": 'ServiceNowの解説', "element": null },
    { "path": 'certupdate', "label": '証明書の自動更新', "element": null },
    { "path": 'gmail', "label": 'Gメールの整理', "element": null },
    { "path": 'docker', "label": 'dockerの使い方', "element": null },
    { "path": 'makelogin', "label": 'ログイン画面の作成', "element": null },
    { "path": 'excel', "label": 'Excelの便利機能', "element": null },
    { "path": 'vba', "label": 'VBAの便利機能', "element": null },
    { "path": 'nodejs', "label": 'node.jsの導入', "element": null },
    { "path": 'techwords', "label": '専門用語の理解・解説', "element": null },
    { "path": 'crosssite', "label": 'クロスサイトスクリプティングについて', "element": null },
    { "path": 'vscode', "label": 'VisualStudioCodeのショートカット・便利機能', "element": null },
    { "path": 'design', "label": 'ページのデザイン', "element": null },
    { "path": 'sitebuild', "label": 'webサイトの構築', "element": null },
    { "path": 'portfolio', "label": 'ポートフォリオの作り方', "element": null },
    { "path": 'tweetdeck', "label": 'TweetDeckの使い方', "element": null },
    { "path": 'humburger', "label": 'ハンバーガーメニューの作り方', "element": null },
    { "path": 'bootstrop', "label": 'cssでブートストラップを試したい', "element": null },
    { "path": 'trend', "label": 'Googleトレンド', "element": null },
*/
];

export default Menu;