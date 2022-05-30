import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Sample1 from '../Sample1'
import Game from '../tutorial'
import './css/style2.css';

class Menu extends React.Component {

    render() {
        return (
            <Router>
                <header>
                    <h1>Applied Information Technology Engineer</h1>
                </header>
                <nav>
                    <RouterMenu />
                </nav>
                <main>
                    <div class="imgbox"><img src="https://source.unsplash.com/random" alt=""></img></div>
                    <article>
                        <RouteList />
                    </article>
                </main>
                <aside></aside>
                <footer></footer>
            </Router>
        );
    }
}

const message = 'Home画面';
const contents = [
    { "path": '/', "label": 'Home', "element": message },
    { "path": 'sample1', "label": 'sample1', "element": <Sample1 /> },
    { "path": 'tutorial', "label": 'tutorial', "element": <Game /> },
    { "path": 'html-css', "label": 'htmlとcssの整理', "element": null },
    { "path": 'shortcut', "label": 'ショートカットの使い方', "element": null },
    { "path": 'chromedev', "label": 'Chromeのデベロッパツール', "element": null },
    { "path": 'jsreg', "label": 'javascript 正規表現', "element": null },
    { "path": 'scraping', "label": 'スクレイピング（企業情報）', "element": null },
    { "path": 'techwords', "label": '専門用語の理解・解説', "element": null },
    { "path": 'testtool', "label": 'テストツールの導入', "element": null },
    { "path": 'servicenow', "label": 'ServiceNowの解説', "element": null },
    { "path": 'certupdate', "label": '証明書の自動更新', "element": null },
    { "path": 'gmail', "label": 'Gメールの整理', "element": null },
    { "path": 'docker', "label": 'dockerの使い方', "element": null },
    { "path": 'makelogin', "label": 'ログイン画面の作成', "element": null },
    { "path": 'excel', "label": 'Excelの便利機能', "element": null },
    { "path": 'vba', "label": 'VBAの便利機能', "element": null },
    { "path": 'nodejs', "label": 'node.jsの導入', "element": null },
    { "path": 'crosssite', "label": 'クロスサイトスクリプティングについて', "element": null },
    { "path": 'vscode', "label": 'VisualStudioCodeのショートカット・便利機能', "element": null },
    { "path": 'design', "label": 'ページのデザイン', "element": null },
    { "path": 'sitebuild', "label": 'webサイトの構築', "element": null },
    { "path": 'portfolio', "label": 'ポートフォリオの作り方', "element": null },
    { "path": 'tweetdeck', "label": 'TweetDeckの使い方', "element": null },
    { "path": 'humburger', "label": 'ハンバーガーメニューの作り方', "element": null },
    { "path": 'bootstrop', "label": 'cssでブートストラップを試したい', "element": null },
    { "path": 'trend', "label": 'Googleトレンド', "element": null },

];

function RouterMenu(props) {
    return (
        <ul>
            <LinkList />
        </ul>
    );
}

function LinkList(props) {

    return (
        contents.map(content =>
            <li>
                <Link to={content.path}>{content.label}</Link>
            </li>
        )
    );
}

function RouteList(props) {

    return (
        <Routes>
            {contents.map(content =>
                <Route path={content.path} element={content.element} />
            )}
        </Routes>
    );
}

export default Menu;