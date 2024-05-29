import React, { useEffect, useState } from "react";
import useBlogRequest from "../services/useBlogRequest";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/blog/Card";
import { setCurrentPage } from "../features/blogSlice";
import { Grid, Pagination, Stack } from "@mui/material";

const Dashboard = () => {
  const { getBlogs, getUsers, getBlogUser } = useBlogRequest();
  const dispatch = useDispatch();
  const { blog, currentPage, totalPage } = useSelector((state) => state.blogs);

  const [isDisabled, setIsDisabled] = useState(false); // Pagination butonlarını devre dışı bırakmak için state

  useEffect(() => {
    getBlogs(currentPage);
    getUsers();
  }, [currentPage]); // Sayfa değişiminde blogları ve kullanıcıları tekrar getir

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
    setIsDisabled(true); // Butonları devre dışı bırak

    setTimeout(() => {
      setIsDisabled(false); // 2 saniye sonra butonları etkinleştir
    }, 2500);
  };

  return (
    <>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {blog?.map((blg) => (
          <Grid item key={blg._id}>
            <Card {...blg} currentPage={currentPage} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} mt={3}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          disabled={isDisabled} // Pagination bileşeninin devre dışı bırakılması
        />
      </Stack>
      <div style={{ paddingBottom: '100px' }}></div>
    </>
  );
};

export default Dashboard;
