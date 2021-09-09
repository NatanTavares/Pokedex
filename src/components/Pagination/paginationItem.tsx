import { useRouting } from "../../hooks/useRouting";
import { IconType } from "react-icons";
import { useHistory } from "react-router-dom";

type Props = {
  disabled?: boolean;
  isCurrent?: boolean;
  Icon?: IconType;
  index: number;
  handleClick?: () => void;
};

export function PaginationItem({
  disabled = false,
  isCurrent = false,
  Icon,
  index,
  handleClick,
}: Props) {
  const { onSetCurrentPage } = useRouting();
  const history = useHistory();

  if (!!Icon) {
    return (
      <button
        disabled={disabled}
        onClick={() => {
          handleClick && handleClick();
          history.push(`/?page=${index}`);
          window.location.reload();
        }}
      >
        <Icon size={16} />
      </button>
    );
  }

  if (isCurrent) {
    return <button className="isCurrent">{index}</button>;
  }

  return (
    <button
      onClick={() => {
        onSetCurrentPage(index);
        history.push(`/?page=${index}`);
        window.location.reload();
      }}
    >
      {index}
    </button>
  );
}
