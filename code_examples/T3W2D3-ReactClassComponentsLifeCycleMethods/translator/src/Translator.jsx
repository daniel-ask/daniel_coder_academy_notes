import React from "react";
import Popup from "./Popup";
import "./translator.css";

class Translator extends React.Component {
  constructor(props) {
    // console.log("New");
    super(props);
    this.state = {
      inputText: "",
      countriesFound: false,
      data: [],
      showPop: false,
      selectedCountry: {},
    };
  }

  async updateText(event) {
    const url = event.target.value
      ? `https://restcountries.eu/rest/v2/name/${event.target.value}`
      : `https://restcountries.eu/rest/v2/all/`;
    try {
      // console.log(event.target.value);
      const res = await fetch(url);
      // console.log(res);
      if (res.status >= 400) {
        throw new Error("No Countries");
      }
      const data = await res.json();
      // console.log(data);
      this.setState({
        ...this.state,
        countriesFound: true,
        inputText: event.target.value,
        data: data,
      });
    } catch (error) {
      this.setState({ countriesFound: false, data: [] });
      console.log(error);
    }
  }

  togglePopUp() {
    console.log(this);
    // const newPopUp = !this.state.showPop;
    this.setState({ showPop: !this.state.showPop });
  }

  changeSelectCountry(country) {
    this.setState({
      ...this.state,
      showPop: !this.state.showPop,
      selectedCountry: country,
    });
  }

  async componentDidMount() {
    // const res = await fetch("https://libretranslate.com/translate", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     q: this.state.inputText,
    //     source: "en",
    //     target: "es",
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // console.log(await res.json());
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    this.setState({countriesFound: true, data: data });
  }

  async componentDidUpdate() {
    // const res = await fetch("https://libretranslate.com/translate", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     q: this.state.inputText,
    //     source: "en",
    //     target: "es",
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // const res = await fetch("https://restcountries.eu/rest/v2/");
    // const data = res.json();
    // console.log(data);
    // this.setState({ ...this.state,  data: await data });
  }

  render() {
    console.log(this.state);
    const { showPop } = this.state;
    console.log(showPop);
    return (
      <main className="main">
        {showPop && (
          <Popup
            country={this.state.selectedCountry}
            clickFunction={() => this.togglePopUp()}
          />
        )}
        <input
          className="search-input"
          type="text"
          name="inputText"
          id="inputText"
          onChange={(event) => this.updateText(event)}
        />
        <button onClick={() => this.updateText()}>Search</button>
        {this.state.countriesFound ? (
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {this.state.data.map((country) => {
              return (
                <div
                  key={country.name}
                  className="country"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => this.changeSelectCountry(country)}
                >
                  <h4 style={{ textAlign: "center" }}>{country.name}</h4>
                  <img src={country.flag} alt="" style={{ width: "100px" }} />
                </div>
              );
            })}
          </ol>
        ) : (
          <h2>No Countries Found</h2>
        )}
      </main>
    );
  }
}

export default Translator;
