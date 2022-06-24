import { Avatar, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import JobPost from "./job_post";
import classes from "./results.module.css";

export default function Results() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [isLoading]);

  if (isLoading) {
    return (
      <section className={classes.container}>
        {Array<any>(10)
          .fill(0)
          .map((e) => (
            <div className={classes.skeletonContainer}>
              <div className={classes.skeletonHeader}>
                <Skeleton
                  variant="circular"
                  sx={{ bgcolor: "grey.600" }}
                  animation="wave"
                >
                  <Avatar sx={{ width: 70, height: 60 }} />
                </Skeleton>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={30}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={20}
                    animation="wave"
                  />
                </div>
              </div>

              {Array<any>(8)
                .fill(0)
                .map((e) => (
                  <Skeleton
                    variant="text"
                    width="95%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.550" }}
                  />
                ))}
            </div>
          ))}
      </section>
    );
  }

  return (
    <section className={classes.container}>
      {Array<any>(10)
        .fill(0)
        .map((e) => (
          <JobPost />
        ))}
    </section>
  );
}