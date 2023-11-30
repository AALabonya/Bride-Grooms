/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CardMedia from '@mui/material/CardMedia';
import Loading from "../../../pages/Loading";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const RouteStory = () => {
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalData, setModalData] = useState('')
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['/reviewsStory'],
        queryFn: async () => {
            const res = await axiosSecure.get("/reviewsStory")
            return res.data;
        }

    })
    console.log(reviews)


    if (isLoading) {
        return <Loading></Loading>
    }


    const handleOpenData = (fav) => {
        handleOpen()
        setModalData(fav)
    }
    return (

        <div>
            <Helmet>
        <title>BrideAndGrooms | Success Story</title>
      </Helmet>
            <div>
                <div>
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">
                        <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Success Story</h2>
                        <p className="text-xl font-semibold leadi text-center mb-20">[Table]</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="dark:bg-gray-700">
                                    <tr className="text-center">
                                        <th className="p-3">Male Biodata Id</th>

                                        <th className="p-3">Female Biodata Id</th>
                                        <th className="p-3">View Story Button
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(fav =>
                                            <tr key={fav._id} className="border-b border-opacity-20 text-center dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p>{fav.selfBiodataNumber}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{fav.partnerBiodataNumber}</p>
                                                </td>
                                                <td >
                                                    
                                                    <Button onClick={() => handleOpenData(fav)} style={{ width: '20px', height: '12px', padding: '5px' }}>
                                                        <img src="https://i.ibb.co/KFb97wR/rei-icon-open-300x300.png" alt="" />
                                                    </Button>
                                                </td>
                                             </tr>)
                                    }
                                </tbody>

                            </table>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Success Story
                                    </Typography>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={modalData.image}
                                            title="green iguana"
                                        />
                                        Self-Biodata Number: {modalData.selfBiodataNumber}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        PartnerBiodata Number: {modalData.partnerBiodataNumber}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {modalData.successStoryReview}
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                </div>


            </div>
        </div>


    );
};

export default RouteStory;