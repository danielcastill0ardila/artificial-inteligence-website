import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

describe('App component',()=>{
  const makeWrapper = (props) =>{
    const wrapper = shallow(<App {...props}/>);
    return{
      wrapper
    }
  }
  it('renders without crashing',()=>{
    const { wrapper } = makeWrapper();
   //expect(wrapper).to.be.present();
  });
});