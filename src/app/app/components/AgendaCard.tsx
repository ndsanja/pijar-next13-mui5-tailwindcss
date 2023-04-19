import {
  AlarmOutlined,
  CalendarMonthOutlined,
  PinDropOutlined,
} from '@mui/icons-material';
import { Avatar, Card, Typography } from '@mui/material';

const AgendaCard = () => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{ borderRadius: 0 }}
      className="min-w-[220px] min-h-[220px] md:min-h-[250px] px-3 md:px-4 py-2"
    >
      <div className="flex items-center space-x-2">
        <Avatar
          src="https://picsum.photos/id/237/200/200"
          className="bg-red-500"
          aria-label="avatar"
          sx={{ width: 24, height: 24 }}
        >
          S
        </Avatar>
        <div>
          <p className="text-xs font-semibold">SMA Harapan Bangsa</p>
          <p className="text-[9px] -mt-3">XII-IPS 1</p>
        </div>
      </div>
      <div className="mt-3">
        <Typography variant="subtitle2">Bahasa Indonesia</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="!text-xs mt-2"
        >
          THis is contane for aoa apklsjdkj djdkjdakj yan akan mengakibatkan
          semaunya inrtikj fa apa ameneknlrn alapa ajdkfj aijg em ne men ...
        </Typography>
      </div>
      <div className="mt-3 flex flex-col">
        <div className="flex items-center">
          <CalendarMonthOutlined className="!w-[16px]" />
          <div className="text-xs ">
            <span className="font-semibold">10.00 WIB</span>
            <span className="ml-2 font-light">21 Agustus 2023</span>
          </div>
        </div>
        <div className="flex items-center">
          <PinDropOutlined className="!w-[16px]" />
          <div className="text-xs ">
            <span className="font-semibold">(Luring)</span>
            <span className="ml-2 font-light">Laboratorium Bahasa</span>
          </div>
        </div>
        <div className="self-end flex items-center mt-3">
          <div className="text-[11px] ">
            <span className="font-light">30 Menit Lagi</span>
          </div>
          <AlarmOutlined className="!w-[16px] ml-2" />
        </div>
      </div>
    </Card>
  );
};

export default AgendaCard;
