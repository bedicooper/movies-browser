import { useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Wrapper, Input, Icon } from "./styled";
import { selectPath } from "./searchSlice";
import { setPath } from "./searchSlice";
import { useEffect } from "react";


export const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const page = useSelector(selectPath);

    useEffect(() =>{
        const path = location.pathname;

        switch(path){
            case "/":
            case "/movies":
            dispatch(setPath("movies"));
            break;

            case "/people":
            dispatch(setPath("people"));
            break;
            default:
        };
    },[location.pathname,dispatch]);
    

    return (
        <Wrapper>
            <Icon />
            <Input 
                placeholder={`Search for ${page}...`}
            />
        </Wrapper>
    )
}

