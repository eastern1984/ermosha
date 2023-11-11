import React from "react";
import Link from 'next/link';
import { Paper, Stack, Typography, Grid, Box } from "@mui/material";
import { useRouter } from 'next/dist/client/router';
import { item, itemWrapper } from "./styles";

interface Props {
    content: { themes: any[], articles: any[], isArticle: boolean; };
}

const AreaMenu: React.FC<Props> = ({ content }) => {
    const { asPath } = useRouter();
    const article = content.isArticle ? content.articles[0] : null;

    return (
        <Stack sx={{ bgcolor: "#f8f8f8", }} spacing={2}>
            {content.isArticle && <Stack spacing={2}>
                <Typography variant="h5">{article?.title}</Typography>
                {article.videoLink &&
                    <iframe width="560" height="315" src={article.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                }
                {article?.shortDescription?.map((v: any) => <Typography key={v.text}>{v.text}</Typography>)}
                {article?.text && <Typography align="justify" dangerouslySetInnerHTML={{ __html: article.text.replaceAll(`\n`, '<br />') }}></Typography>}
            </Stack>}
            {!content.isArticle &&
                <>
                    <Paper sx={{ p: 2, minHeight: "45px", bgcolor: "rgb(16 2 79 / 23%)" }} elevation={0}>
                        <Grid container spacing={2} alignContent={"stretch"}>
                            {content?.themes.length > 0 && <Grid item xs={12}>
                                <Typography variant="h5">Темы</Typography>
                            </Grid>}

                            {content?.themes.map(v => (
                                <Grid item xs={3} key={v.text} sx={itemWrapper}>
                                    <Link href={`${asPath}/${v.url}`} >
                                        <Paper sx={{ p: 2, minHeight: "45px" }} elevation={0}>
                                            <Typography sx={item}>{v.text}</Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                    <Paper sx={{ p: 2, minHeight: "45px", bgcolor: "rgb(2 53 79 / 25%)" }} elevation={0}>
                        <Grid container spacing={2} alignContent={"stretch"}>
                            {content?.articles.length > 0 && <Grid item xs={12}>
                                <Typography variant="h5">Статьи</Typography>
                            </Grid>}

                            {content?.articles.map(v => (
                                <Grid key={v.text} item xs={3} sx={itemWrapper}>
                                    <Link href={`${asPath}/article/${v.url}`}>
                                        <Paper sx={{ p: 2, minHeight: "45px" }} elevation={0}>
                                            <Typography sx={item}>{v.title}</Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </>
            }
        </Stack>
    );
};

export default AreaMenu;
