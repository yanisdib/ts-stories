import { StyledTag } from './Tag.styled';


interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    onDelete?: () => void;
    selected?: boolean;
}


function Tag({
    children,
    disabled,
    icon,
    onClick,
    onDelete,
    selected
}: Props): JSX.Element {
    return (
        <StyledTag
            disabled={disabled}
            onClick={onClick}
            selected={selected}
        >
            <span>
                {icon && icon}
                {children}
            </span>
        </StyledTag>
    );
}


Tag.defaultProps = {
    children: undefined,
    disabled: false,
    selected: false
}


export default Tag;