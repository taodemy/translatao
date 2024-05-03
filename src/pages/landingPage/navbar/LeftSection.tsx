import MenuIcon from '@mui/icons-material/Menu';

const LeftSection = () => {
    return (
      <div className="w-[200] h-12">
          <div className="max-w-full h-12 flex items-center gap-6">
            <div>
              <MenuIcon />
            </div>
            <h1 className="font-normal text-4xl">Translatao</h1>
          </div>
        {/* Add your component content here */}
      </div>
    );
  };
  
  export default LeftSection;