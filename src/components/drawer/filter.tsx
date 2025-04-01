import Drawer from ".";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Filter = ({ open, onClose }: Props) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="w-[450px] h-full bg-white rounded-[20px]">
        <p>Hello world</p>
      </div>
    </Drawer>
  );
};

export default Filter;
