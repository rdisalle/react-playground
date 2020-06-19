import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {

    static defaultProps = { sections: [] }

    state = {
        activeSectionIndex: null,
      }

    handleButtonClick = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
      }

    renderSection(section, index, activeSectionIndex) {
        return (
        <li key={index} className='sectionItems'>
          <button onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          {(activeSectionIndex === index) && <p>{section.content}</p>}
        </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return(
            <ul className='Accordion'>
                {sections.map((section, index) =>
                this.renderSection(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }

}

export default Accordion;