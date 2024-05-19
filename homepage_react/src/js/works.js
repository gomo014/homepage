import React from 'react';
import '../css/works.css';
import '../js/lightbox.js';
import '../css/lightbox.css';
import filterIcon from '../../public/images/filterIcon.png';
import gridDisplay from '../../public/images/gridDisplay.png';
import detailDisplay from '../../public/images/detailDisplay.png';
import backArrow from '../../public/images/t_arrowb.gif';
import axios from 'axios';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: [],
            sortBy: 'createdDate', // 最初は作成日でソートされる
            sortAsc: true, // 昇順でソートされる
            showSortOptions: false, // ソートオプションを表示するかどうか
            isGridFlag: true, //true:グリッド表示、false:詳細表示
            isContentScreenFlag: false,
            sortFilterPosition: '61px',
            filtersType: {
                'Webページ': false,
                'Webアプリ': false,
                'Androidアプリ': false,
                'iPhoneアプリ': false,
                'API': false,
            },
            filtersLanguage: {
                'Swift': false,
                'Python': false,
                'Javascript': false
            },
            screenData: {
                image: '',
                title: '',
                description: '',
                language: '',
                url: '',
                gitUrl: '',
            }
        };
    }

    //DBからデータ取得
    componentDidMount() {
        axios.get('/api/products/')
            .then(response => {
                this.setState({ keys: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSort = (event, key) => {

        const isClickKey = event.target.classList.contains('key');

        //キーがクリックされる以外の場合（フィルタアイコンやフィルタ子ウィンドウ）はソート処理を行わない
        if (!isClickKey) {
            return;
        }

        // クリックされたキーでソートする
        if (this.state.sortBy === key) {
            // 同じキーを再度クリックした場合、ソート順を反転する
            this.setState({ sortAsc: !this.state.sortAsc });
        } else {
            // 新しいキーでソートを開始する
            this.setState({ sortBy: key, sortAsc: true });
        }
    };

    toggleSortOptions = (event) => {
        // ソートオプションの表示を切り替える
        this.setState({ showSortOptions: !this.state.showSortOptions });
    };

    handleTypeFilterChange = (type) => {
        // フィルター状態を更新する
        const updatedFilters = { ...this.state.filtersType, [type]: !this.state.filtersType[type] };
        this.setState({ filtersType: updatedFilters });
    };

    handleLanguageFilterChange = (language) => {
        // フィルター状態を更新する
        const updatedFilters = { ...this.state.filtersLanguage, [language]: !this.state.filtersLanguage[language] };
        this.setState({ filtersLanguage: updatedFilters });
    };

    setButtonPositionGrid() {
        document.getElementById('gridbutton').style.right = '-727px';
        document.getElementById('detailbutton').style.right = '-740px';
    }

    setButtonPositionDetail() {
        document.getElementById('gridbutton').style.right = '-741px';
        document.getElementById('detailbutton').style.right = '-753px';
    }

    //ソートウィンドウのチェックボックス制御
    toggleCheckboxes() {
        var subTree = document.querySelector(".sub-tree");
        subTree.style.display = subTree.style.display === 'block' ? '' : 'block';
    }

    //ソートウィンドウのチェックボックス制御
    toggleCheckboxes2() {
        var subTree2 = document.querySelector(".sub-tree2");
        subTree2.style.display = subTree2.style.display === 'block' ? '' : 'block';
    }

    //詳細画面用のデータをセット
    setData(key) {
        const data = {
            image: key.Image,
            title: key.Title,
            description: key.Description,
            language: key.Language,
            url: key.URL,
            gitUrl: key.GitURL,
        }

        this.setState({
            screenData: data,
            isContentScreenFlag: true
        });

    }

    render() {
        // ソートを適用したキーの配列を作成する
        const sortedKeys = [...this.state.keys].sort((a, b) => {
            if (a[this.state.sortBy] < b[this.state.sortBy]) return this.state.sortAsc ? -1 : 1;
            if (a[this.state.sortBy] > b[this.state.sortBy]) return this.state.sortAsc ? 1 : -1;
            return 0;
        });

        const filteredKeys = sortedKeys.filter((key) => {
            // タイプフィルターを適用する
            const typeFilterPassed = Object.values(this.state.filtersType).every((filter) => !filter) || this.state.filtersType[key.Type];

            // 言語フィルターを適用する
            const languageFilterPassed = Object.values(this.state.filtersLanguage).every((filter) => !filter) || this.state.filtersLanguage[key.Language];

            // 両方のフィルターがパスしたキーを返す
            return typeFilterPassed && languageFilterPassed;
        });

        return (
            <div>
                {!this.state.isContentScreenFlag && (
                    <div className="search-result">
                        <div id="filters">
                            <button id="filterbutton" onClick={() => { this.toggleSortOptions(); }}><img src={filterIcon} alt="Button Icon" className="button-img" /></button>
                            {this.state.showSortOptions && (
                                <div id="sortWindowType">
                                    <ul id="tree">
                                        <li>
                                            <div onClick={this.toggleCheckboxes}>コンテンツ</div>
                                            <ul className="sub-tree">
                                                {Object.keys(this.state.filtersType).map((type, index) => (
                                                    <div key={index}>
                                                        <label><input type="checkbox" checked={this.state.filtersType[type]} onChange={() => this.handleTypeFilterChange(type)} />{type}</label>
                                                        <br />
                                                    </div>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul id="tree2">
                                        <li>
                                            <div onClick={this.toggleCheckboxes2}>使用言語</div>
                                            <ul className="sub-tree2">
                                                {Object.keys(this.state.filtersLanguage).map((type, index) => (
                                                    <div key={index}>
                                                        <label><input type="checkbox" checked={this.state.filtersLanguage[type]} onChange={() => this.handleLanguageFilterChange(type)} />{type}</label>
                                                        <br />
                                                    </div>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <button id="gridbutton" onClick={() => { this.setState({ isGridFlag: true }); this.setButtonPositionGrid(); }}><img src={gridDisplay} alt="Button Icon" className="button-img" /></button>
                        <button id="detailbutton" onClick={() => { this.setState({ isGridFlag: false }); this.setButtonPositionDetail(); }}><img src={detailDisplay} alt="Button Icon" className="button-img" /></button>
                        {this.state.isGridFlag && (
                            <div className="result-grid-table">
                                {filteredKeys.map((key, index) => (
                                    <div className="result-grid" key={index}>
                                        <img className="data-img" src={key.Thumbnail} alt={index} />
                                        <a href="#" className="black" onClick={() => this.setData(key)}>{key.Title}</a>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!this.state.isGridFlag && (
                            <table className="result-table">
                                <thead>
                                    <tr>
                                        <th className="urlKey" style={{ width: "10%" }}></th>
                                        <th className="key" style={{ width: "30%" }} onClick={(event) => this.handleSort(event, 'Title')}>タイトル</th>
                                        <th className="key" style={{ width: "20%" }} onClick={(event) => this.handleSort(event, 'Type')}>コンテンツ</th>
                                        <th className="key" style={{ width: "25%" }} onClick={(event) => this.handleSort(event, 'Language')}>使用言語</th>
                                        <th className="key" style={{ width: "15%" }} onClick={(event) => this.handleSort(event, 'CreatedDate')}>作成日</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredKeys.map((key, index) => (
                                        <tr key={index} className="result-row">
                                            <td style={{ textAlign: "center" }}><a href="#" onClick={() => this.setData(key)}>詳細</a></td>
                                            <td>{key.Title}</td>
                                            <td>{key.Type}</td>
                                            <td>{key.Language}</td>
                                            <td>{key.CreatedDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                    </div>
                )}
                {this.state.isContentScreenFlag && (
                    <div id="content-screen">
                        <a href="#" id="screen-back-link" onClick={() => { this.setState({ isContentScreenFlag: false }) }}><img src={backArrow} alt="back-arrow" id="back-arrow" /> 前に戻る</a>
                        <div id="content">
                            <a href={this.state.screenData.image} data-lightbox="image-1">
                                <img src={this.state.screenData.image} id="content-img" />
                            </a>
                            <br />
                            <div id="content-right">
                                <div id="title">{this.state.screenData.title}</div><br />
                                <div id="description">{this.state.screenData.description}</div><br />
                                <a href={this.state.screenData.url} id="content-link" target="_blank">作品ページにとぶ</a><br />
                                <a href={this.state.screenData.gitUrl} id="github-link" target="_blank">GitHub</a><br />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchResult;