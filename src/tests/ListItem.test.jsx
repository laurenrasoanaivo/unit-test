import { render, fireEvent} from "@testing-library/react";

import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    //TODO: implement this
    it('callback is called', () => {
        const onCheck = jest.fn();
        const {getByTestId} = render(<ListItem
            id='list-item-1'
            checkable={true}
            onCheck={onCheck}
            item='Lorem ipsum dolor sit amet consectetur'
        />);
        const check = getByTestId("test-list-item-1");
        fireEvent.click(check);
        expect(onCheck).toHaveBeenCalled();
    });

    //TODO: implement this
    it('callback is not called when not checkable', () => {
        const onCheck = jest.fn();
        const {getByTestId} = render(<ListItem
            id='list-item-1'
            checkable={false}
            onCheck={onCheck}
            item='Lorem ipsum dolor sit amet consectetur'
        />);
        expect(onCheck).not.toHaveBeenCalled();
    });

    //TODO: implement this
    it('matches saved snapshot', () => {
        const tree = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('matches saved snapshot 2', () => {
        const tree = render(
            <ListItem
                id='list-item-test-2'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        expect(tree).toMatchSnapshot();
    });
});