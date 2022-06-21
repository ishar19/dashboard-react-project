import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Chart from './Doughnut';
import {
    FaShoppingBasket,
    FaReact,
    FaThumbsUp,
    FaRegPaperPlane,
    FaTshirt,
    FaRedhat,
    FaShoePrints
} from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    color: "#FFFFF",
    width: { xs: '90%' },
    height:"fit-content",
    borderRadius:"10px"
}));

export default function Main() {
    return (
        <Box className='upperRow' sx={{ width: 'auto' }}>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-around"
            >
                <Item className="upperRowItem">
                <div>
                    <p className="upperRowText ">
                        PENDING ORDER
                    </p>
                    <p className="textRow">
                        <span className="large bold">202</span>
                        <span><div className="iconBasket"><FaShoppingBasket /></div> </span>
                    </p>
                </div>
                </Item>
                <Item className="upperRowItem"><div>
                    <p className="upperRowText">
                        PROCESSING ORDER
                    </p>
                    <p className="textRow">
                        <span className=" large bold">99</span>
                        <span><div className="iconReact"><FaReact/></div></span>
                    </p>
                </div></Item>
                <Item className="upperRowItem"><div>
                    <p className="upperRowText">
                        READY TO DELIVER
                    </p>
                    <p className="textRow">
                        <span className="large bold">263</span>
                        <span><div className="iconThumbsUp"><FaThumbsUp/></div></span>
                    </p>
                </div></Item>
                <Item className="upperRowItem"><div>
                    <p className="upperRowText">
                        DELIVERED ORDERS
                    </p>
                    <p className="textRow">
                        <span className="large bold">345</span>
                        <span> <div className="iconDelivery"><FaRegPaperPlane/></div> </span>
                    </p>
                </div></Item>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-around"
                marginTop="20px"
            >
                <Item className="today" >
                    <div >
                        <div><form method="post" action>
                            <span className="bold large">Today's Delivery</span> 
                            <input type="search" id="" name="" placeholder="search here"></input>
                            <select name="" id="">
                                <option value="All Order">All order</option>
                                <option value="Pending">Pending</option>
                                <option value="Placed">PLaced</option>
                            </select>
                        </form>
                        </div>
                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}
                                    direction={{ xs: 'column', sm: 'column', md: 'column' }}>
                                    <Item>
                                        <Stack spacing={2}
                                            direction={{ xs: 'column', sm: 'column', md: 'row' }}>
                                            <Item className="flex-row color-border-yellow">
                                                <div>
                                                    <div className="textRow "><span>9865988</span>
                                                        <span>ORD-0948</span>
                                                    </div>
                                                    <div className="iconShirt">
                                                    <FaTshirt/></div>
                                                </div>
                                            </Item>
                                            <Item className="flex-row color-border-red">
                                                <div>
                                                    <div className="textRow" ><span>ARIF</span>
                                                        <span>ORD-0949</span>
                                                    </div>
                                                    <div className="iconShirt">
                                                        <FaTshirt />
                                                    </div>
                                                    <div className="iconShirt">
                                                        <FaTshirt />
                                                    </div>
                                                </div>
                                            </Item>
                                            <Item className="flex-row color-border-grey">
                                                <div>
                                                    <div className="textRow"><span>shiyas</span>
                                                        <span>ORD-0950</span>
                                                    </div>
                                                    <div className="iconHat" >
                                                        <FaRedhat/>
                                                    </div>
                                                </div>
                                            </Item>
                                        </Stack>
                                    </Item>
                                    <Item>
                                        <Stack spacing={2}
                                            direction={{ xs: 'column', sm: 'column', md: 'row' }}>
                                            <Item className="flex-row color-border-grey">
                                                <div>
                                                    <div className="textRow"><span>Walk in customer</span>
                                                        <span>ORD-0951</span>
                                                    </div>
                                                    <div className="iconHat">
                                                        <FaRedhat />
                                                    </div>
                                                    <div className="iconShoe">
                                                        <FaShoePrints />
                                                    </div>
                                                </div>
                                            </Item>
                                        </Stack>
                                    </Item>
                                </Stack>
                            </Box>
                        </div>
                    </div>
                </Item>
                <Item>
                <div><Chart/></div>
                </Item>
            </Stack>
        </Box>
    );
}
