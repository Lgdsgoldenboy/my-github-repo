import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import avatar from "../../assets/img/Bitmap.png";

const Error = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h2">Comrade you are lost 😁😁!!!</Typography>
      <div className="m-[10px] ml-[30px] md:ml-[7rem] lg:ml-[30px]">
        <img
          src={avatar}
          alt="github-user-profile-picture"
          className="h-[90px] w-[90px] rounded-full object-center m-3 md:h-[120px] md:w-[120px] md:rounded-full"
        />
      </div>
      <p>Please navigate to the correct URL</p>
    </Stack>
  );
};

export default Error;
