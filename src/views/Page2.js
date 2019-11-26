import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('BirdStore')
@inject('LoginStore')
@observer
class Page2 extends Component {

    render() {
        const { BirdStore } = this.props;
        console.log(this.props)

        return (
            <div className="App">

                <ul>
                    {BirdStore.birds.map(bird => (
                        <li key={bird}>
                            {bird}
                        </li>
                    ))}
                </ul>

            </div>
        )
    }


}

export default Page2;
