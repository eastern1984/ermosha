import React from "react";
import Link from 'next/link';
import { Paper, Typography, Grid } from "@mui/material";
import { useRouter } from 'next/dist/client/router';
import { articleWrapper, item, itemWrapper } from "./styles";
import Image from "next/image";

interface Props {
    content: { themes: any[], articles: any[], isArticle: boolean; };
}

const Home: React.FC<Props> = ({ content }) => {
    const { asPath } = useRouter();
    console.log(content);
    return (
        <Paper elevation={0} sx={{ bgcolor: "#f8f8f8" }}>
            <Grid container spacing={2}>
                {content?.articles.map(v => (
                    <Grid item xs={3} key={v.title} sx={articleWrapper}>
                        <Link href={`${asPath}/${v.url}`} >
                            <Paper sx={{ p: 2, height: "200px" }} elevation={0}>
                                <Image width="100" height="100" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="123" />
                                <Typography sx={item}>{v.title}</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default Home;
