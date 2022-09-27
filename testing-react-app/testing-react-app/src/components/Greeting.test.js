import Greeting from './Greeting'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Breeting component',()=>{

    test('renders hello as a text',()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
        //..nothing
    
        //Assert
        const helloElement = screen.getByText('Hello')
        expect(helloElement).toBeInTheDocument();
    
    
    });

    test('renders good to see you if the button was NOT clicked',()=>{
        render(<Greeting/>)
        const output = screen.getByText('good to see you',{exact:false})
        expect(output).toBeInTheDocument();
    });

    test('render changed if the button was clicked',()=>{
        render(<Greeting/>)

        //render is rendering entire component TREE! It renders the content of  components that are used inside of Greeting 

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert

        const output = screen.getByText('Changed!')
        expect(output).toBeInTheDocument()


    })

    test('does not render good to see you if the button was clicked',()=>{
        render(<Greeting/>)

        //Act

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert

        const output = screen.queryByText('good to see you', {exact:false})
        
        expect(output).toBeNull()
    });

});

//i expect that after clicking button output will be null ,
//bcs if the element wont be found, queryByText will return null.

