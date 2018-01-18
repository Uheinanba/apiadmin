const INC_TODO = 'INC_TODO';
const DESC_TODO = 'DESC_TODO';

export const incTodo = () => ({
    type: INC_TODO,
});
export const descTodo = () => ({
    type: DESC_TODO,
});

export default (state = {value: 0}, action) => {
    switch(action.type) {
        case INC_TODO:
            return Object.assign({}, state, {
                value: state.value + 1
            })
        case DESC_TODO:
            return Object.assign({}, state, {
                value: state.value - 1
            })
        default:
            return state;
    }
}