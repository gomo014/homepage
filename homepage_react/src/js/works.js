import React from 'react';
import '../css/works.css';
import filterIcon from '../../public/images/filterIcon.png';
import gridDisplay from '../../public/images/gridDisplay.png';
import detailDisplay from '../../public/images/detailDisplay.png';
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
            filtersType: { // フィルターの初期値を設定する
                'Webアプリ': false,
                'Androidアプリ': false,
                'iPhoneアプリ': false,
                'API': false,
            },
            filtersLanguage: { // フィルターの初期値を設定する
                'Java': false,
                'Swift': false,
                'Python': false,
                'Javascript': false
            },
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
            <div className="search-result">
                <button className="filterbutton" onClick={this.toggleSortOptions}><img src={filterIcon} alt="Button Icon" className="button-img" /></button>
                <button className="gridbutton" onClick={() => this.setState({ isGridFlag: true })}><img src={gridDisplay} alt="Button Icon" className="button-img" /></button>
                <button className="detailbutton" onClick={() => this.setState({ isGridFlag: false })}><img src={detailDisplay} alt="Button Icon" className="button-img" /></button>
                {this.state.showSortOptions && (
                    <div className="sortWindowType">
                        {Object.keys(this.state.filtersType).map((type, index) => (
                            <div key={index}>
                                <label>
                                    <input type="checkbox" checked={this.state.filtersType[type]} onChange={() => this.handleTypeFilterChange(type)} />
                                    {type}
                                </label>
                                <br />
                            </div>
                        ))}
                    </div>
                )}
                {this.state.isGridFlag && (
                    <div className="result-grid-table">
                        {filteredKeys.map((key, index) => (
                            <div className="result-grid" key={index}>
                                <a href={key.URL}><img src={key.Thumbnail} alt={index} /></a>
                            </div>
                        ))}
                    </div>
                )}
                {!this.state.isGridFlag && (
                    <table className="result-table">
                        <thead>
                            <tr>
                                <th className="urlKey"></th>
                                <th className="key" onClick={(event) => this.handleSort(event, 'Title')}>タイトル</th>
                                <th className="key" onClick={(event) => this.handleSort(event, 'Type')}>タイプ</th>
                                <th className="key" onClick={(event) => this.handleSort(event, 'Language')}>使用技術</th>
                                <th className="key" onClick={(event) => this.handleSort(event, 'CreatedDate')}>作成日</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredKeys.map((key, index) => (
                                <tr key={index} className="result-row">
                                    <td><a href={key.URL}>詳細</a></td>
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
        );
    }
}

export default SearchResult;
