import React from 'react';

class FontTester extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.ref1 = React.createRef();
    this.state = {
      text: 'Lorem ipsum dolor sit amet...',
      fontSize: 16,
    };
  }
  handleChange = () => {
    this.setState({
      text: this.ref.current.value,
    });
  };
  handleRange = () => {
    this.setState({
      fontSize: this.ref1.current.value,
    });
  };
  render() {
    let fonts = [
      'Azeret Mono',
      'Glory',
      'Lato',
      'Montserrat',
      'Noto Sans',
      'Noto SansJP',
      'Open Sans',
      'Poppins',
      'Roboto',
      'Urbanist',
    ];
    return (
      <section className="pt-8">
        <div className="px-20 flex mb-8">
          <input
            className="border-2 border-grey-200 w-192 rounded-l-xl p-2"
            type="text"
            onChange={this.handleChange}
            ref={this.ref}
            placeholder="Type Something"
          />
          <span className="border-2 flex items-center w-124">
            <small className="text-lg inline-block mx-2">{this.state.fontSize}px</small>
          <input
            onChange={this.handleRange}
            ref={this.ref1}
            className="rounded-l-xl p-2"
            type="range"
            value="16"
          />
          </span>
        </div>
        <ul className="flex justify-between flex-wrap px-20">
          {fonts.map((font) => (
            <li className="w-384 min-h-316 border-2 border-grey-200 rounded-xl p-4 mb-4" key={font}>
              <h3 className="text-lg" style={{ fontFamily: 'Open Sans'}}>{font}</h3>
              <h2 className="break-all mt-4" style={{ fontFamily: font,  fontSize:this.state.fontSize+"px"}}>
                {this.state.text ? this.state.text : ''}
              </h2>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default FontTester;
