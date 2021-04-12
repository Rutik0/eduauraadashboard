import { React, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GoogleMapReact } from "google-map-react";
import "../styles/chart.css";
import Axios from "axios";
export default function StatsPage() {
  const [downloads, updateddownloads] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /*useEffect(() => {
    fetch("http://localhost:3002/studentlist")
      .then((res) => res.json())
      .then((res) => updateddownloads(res));
  }, []);*/
  const [selecteddate1, setSelectedDate1] = useState(new Date());

  const [selecteddate2, setSelectedDate2] = useState(new Date());

  const [resp, updatedres] = useState([]);

  const [revenue, updatedrevenue] = useState([]);

  const [social_Media, updated_Social_Media] = useState([]);
  const [demodata, updated_Demo] = useState([]);
  console.log(selecteddate1);
  console.log(selecteddate1);
  console.log("1111111111111111", typeof resp, resp);
  console.log("demodataall", demodata);
  let dates;
  let downloadstile = 0;
  let android = 0;
  let guest_User = 0;
  let Subscriber = 0;
  let cpgs = 0;
  let cps = 0;
  let avg_Time_Spent = 0;
  let revenuestore = 0;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = [];
  let dates1 = [];
  let years = [];
  let date_Array = [];
  resp.map((data) => {
    dates = data.dates;
    dates1.push(new Date(dates));
  });
  dates1.map((data) => {
    date_Array.push(
      `${data.getUTCFullYear()} - ${
        data.getUTCMonth() + 1
      } - ${data.getUTCDate()}`
    );
  });

  let guest_User_Array = [];
  let dates_Array = [];
  let downloads_Tile_Array = [];
  let cpgu_Array = [];
  let cps_Array = [];
  let avg_Time_Spent_Array = [];
  let revenue_date_Array = [];
  let final_Date = [];
  let revenue_Dates;
  let sub_Array = [];
  let android_Downloads = [];
  let ios_Downloads = [];

  resp.map((data) => {
    downloadstile = data.android_Downloads + data.ios_Downloads + downloadstile;
    downloads_Tile_Array.push(downloadstile);
    android_Downloads.push(data.android_Downloads);
    ios_Downloads.push(data.ios_Downloads);
    console.log("downloadstile", downloadstile);
  });

  // guestuser data
  resp.map((data) => {
    guest_User_Array.push(data.guest_User);
    guest_User = data.guest_User + guest_User;
  });

  //FINAL DATES OF METRIX TABLE
  date_Array.map((data) => {
    dates_Array.push(data);
  });
  //NO OF SUBSCRIBERS
  resp.map((data) => {
    sub_Array.push(data.Subscriber);
    Subscriber = data.Subscriber + Subscriber;
  });
  //DATES OF REVENUE TABLE
  revenue.map((data) => {
    revenue_Dates = new Date(data.dates);
    revenue_date_Array.push(revenue_Dates);
  });

  revenue_date_Array.map((data) => {
    final_Date.push(
      `${data.getUTCFullYear()} - ${
        data.getUTCMonth() + 1
      } - ${data.getUTCDate()}`
    );
  });
  let demo_Dates;
  let demo_Date_Array = [];
  //let demo_data_Array = [];
  let ap;
  let arp = 0;
  let assam = 0;
  let bihar = 0;
  let Cg = 0;
  let goa = 0;
  let gujarat = 0;
  let hi = 0;
  let jh = 0;
  let karna = 0;
  let kerala = 0;
  let mp = 0;
  let mh = 0;
  let ma = 0;
  let megha = 0;
  let miz = 0;
  let nag = 0;
  let odi = 0;
  let pu = 0;
  let raj = 0;
  let sikkhim = 0;
  let tn = 0;
  let te = 0;
  let up = 0;
  let ut = 0;
  let wb = 0;
  let tr = 0;
  let apt = 0;
  //dates of demographics table
  demodata.map((data) => {
    apt = data.andhra_Pradesh + apt;
    arp = data.arunachal_Pradesh + arp;
    assam = data.assam + assam;
    bihar = data.bihar + bihar;
    Cg = data.chhattisgarh + Cg;
    goa = data.goa + goa;
    gujarat = data.gujarat + gujarat;
    hi = data.himachal_Pradesh + hi;
    jh = data.jharkhand + jh;
    karna = data.karnataka + karna;
    kerala = data.kerala + kerala;
    mp = data.madhya_Pradesh + mp;
    mh = data.maharashtra + mh;
    ma = data.manipur + ma;
    megha = data.meghalaya + megha;
    miz = data.mizoram + miz;
    nag = data.nagaland + nag;
    odi = data.odisha + odi;
    pu = data.punjab + pu;
    raj = data.rajasthan + raj;
    sikkhim = data.sikkhim + sikkhim;
    tn = data.tamil_Nadu + tn;
    te = data.telangana + te;
    up = data.uttar_Pradesh + up;
    ut = data.uttarakhand + ut;
    wb = data.west_Bengal + wb;
    tr = data.tripura + tr;
  });
  let demo_Final = [bihar, gujarat, mp, mh, odi, raj, tn, te, up, wb];
  console.log("arp", arp);
  console.log("apt", apt);
  let revenue_Array = [];
  revenue.map((data) => {
    revenuestore =
      revenuestore +
      data.upgraded_500 * 500 +
      data.upgraded_1500 * 1500 +
      data.Eduauraa_999 * 999 +
      data.Eduauraa_1999 * 1999 +
      data.Eduauraa_2499 * 2499 +
      data.Zee_999 * 999;
    revenue_Array.push(revenuestore);
  });
  //COST PER GUEST USER
  resp.map((data) => {
    cpgu_Array.push(data.Cpgs);
    cpgs = data.Cpgs + cpgs;
  });
  //COST PER SUBSCRIBER
  resp.map((data) => {
    cps_Array.push(data.cps);
    cps = data.cps + cps;
  });
  //AVERAGE TIME SPENT
  resp.map((data) => {
    avg_Time_Spent_Array.push(data.avg_Time_Spent);
    avg_Time_Spent = data.avg_Time_Spent + avg_Time_Spent;
  });
  /*console.log('mapresult',mapresult.id);*/

  //SOCIAL MEDIA
  let fb_Likes = [];
  let fb_Unlikes = [];
  let insta_Follow = [];
  let insta_Unfollow = [];
  let twitter_Follow = [];
  let twitter_Unfollow = [];
  let social_Media_Array = [];
  let yt_Likes = [];
  let yt_Unlikes = [];
  let social_Dates;
  let twitter_Follow_Total = 0;
  let twitter_Likes_Total = 0;
  let insta_Likes_Total = 0;
  let insta_Follow_Total = 0;
  let fb_Follow_Total = 0;
  let fb_Likes_Total = 0;
  let yt_Likes_Total = 0;
  let yt_Unlikes_Total = 0;
  let daily_Visit_Total = 0;
  let daily_Visit_Array = [];
  let insta_Post = [];
  social_Media.map((data) => {
    twitter_Follow_Total = data.twitter_Follow + twitter_Follow_Total;
    twitter_Likes_Total = data.twitter_Likes + twitter_Likes_Total;
    insta_Likes_Total = insta_Likes_Total + data.insta_Likes;
    insta_Follow_Total = data.insta_Follow + insta_Follow_Total;
    fb_Follow_Total = data.fb_Follow + fb_Follow_Total;
    fb_Likes_Total = data.fb_Likes + fb_Likes_Total;
    yt_Likes_Total = data.youtube + yt_Likes_Total;
    yt_Unlikes_Total = data.yt_Unlikes + yt_Unlikes_Total;
    daily_Visit_Total = data.daily_Visit + daily_Visit_Total;
    fb_Likes.push(data.fb_Likes);
    fb_Unlikes.push(data.fb_Unlikes);
    insta_Follow.push(data.insta_Follow);
    insta_Unfollow.push(data.insta_Unfollow);
    twitter_Follow.push(data.twitter_Follow);
    twitter_Unfollow.push(data.twitter_Unfollow);
    social_Dates = new Date(data.dates);
    social_Media_Array.push(social_Dates);
    yt_Likes.push(data.youtube);
    yt_Unlikes.push(data.yt_Unlikes);
    daily_Visit_Array.push(data.daily_Visit);
    insta_Post.push(data.insta_Post);
  });
  twitter(twitter_Follow_Total, twitter_Likes_Total, daily_Visit_Total);
  fb(fb_Follow_Total, fb_Likes_Total);
  yt(yt_Likes_Total, yt_Unlikes_Total);
  insta(insta_Likes_Total, insta_Follow_Total);
  function twitter(follow, likes, visit) {
    if (follow >= 1000000000) {
      twitter_Follow_Total =
        (follow / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (follow >= 1000000) {
      twitter_Follow_Total =
        (follow / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (follow >= 1000) {
      twitter_Follow_Total =
        (follow / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    if (likes >= 1000000000) {
      twitter_Likes_Total =
        (likes / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (likes >= 1000000) {
      twitter_Likes_Total =
        (likes / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (likes >= 1000) {
      twitter_Likes_Total = (likes / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    if (visit >= 1000000000) {
      daily_Visit_Total =
        (visit / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (visit >= 1000000) {
      daily_Visit_Total =
        (visit / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (visit >= 1000) {
      daily_Visit_Total = (visit / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  }

  function fb(follow, likes) {
    if (follow >= 1000000000) {
      fb_Follow_Total =
        (follow / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (follow >= 1000000) {
      fb_Follow_Total = (follow / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (follow >= 1000) {
      fb_Follow_Total = (follow / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    if (likes >= 1000000000) {
      fb_Likes_Total =
        (likes / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (likes >= 1000000) {
      fb_Likes_Total = (likes / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (likes >= 1000) {
      fb_Likes_Total = (likes / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  }

  function yt(likes, follow) {
    if (follow >= 1000000000) {
      yt_Unlikes_Total =
        (follow / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (follow >= 1000000) {
      yt_Unlikes_Total =
        (follow / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (follow >= 1000) {
      yt_Unlikes_Total = (follow / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    if (likes >= 1000000000) {
      yt_Likes_Total =
        (likes / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (likes >= 1000000) {
      yt_Likes_Total = (likes / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (likes >= 1000) {
      yt_Likes_Total = (likes / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  }

  function insta(likes, follow) {
    if (follow >= 1000000000) {
      insta_Follow_Total =
        (follow / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (follow >= 1000000) {
      insta_Follow_Total =
        (follow / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (follow >= 1000) {
      insta_Follow_Total = (follow / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    if (likes >= 1000000000) {
      insta_Likes_Total =
        (likes / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (likes >= 1000000) {
      insta_Likes_Total =
        (likes / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (likes >= 1000) {
      insta_Likes_Total = (likes / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  }
  console.log(fb_Likes_Total);
  let social_Dates_Array = [];
  social_Media_Array.map((data) => {
    social_Dates_Array.push(
      `${data.getUTCFullYear()} - ${
        data.getUTCMonth() + 1
      } - ${data.getUTCDate()}`
    );
  });

  let demo_Array = [];

  demo_Date_Array.map((data) => {
    demo_Array.push(
      `${data.getUTCFullYear()} - ${
        data.getUTCMonth() + 1
      } - ${data.getUTCDate()}`
    );
  });

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(
        `https://backend-eduaura-node.herokuapp.com/dashboard?&date1=${selecteddate1}&date2=${selecteddate2}`
      );

      /* console.log("month",request.data.dates.getUTCMonth())*/
      updatedres(request.data[0]);
      updatedrevenue(request.data[1]);
      updated_Social_Media(request.data[2]);
      updated_Demo(request.data[3]);

      return request;
      /*.then((res) => {
          const response = res.json();
          console.log("2reponse", response);

          updatedres(response);
        })
        .then((data) => {
          console.log(data);
        });*/
    }
    fetchData();
  }, [selecteddate1, selecteddate2]);

  //Total Downloads Graph
  let alternate_Color = "#58687A";
  let color = "#293949";
  const data1 = {
    labels: [],

    datasets: [
      {
        label: "ANDROID DOWNLOADS",

        data: [],
        borderColor: color,
        backgroundColor: ["white"],
        pointBackgroundColor: ["red"],
        pointBorderColor: ["black"],
      },

      {
        label: "IOS DOWNLOADS",

        data: [],
        borderColor: [alternate_Color],
        backgroundColor: ["white"],
        pointBackgroundColor: ["red"],
        pointBorderColor: ["black"],
      },
    ],
  };

  for (var i = 0; i < guest_User_Array.length; i++) {
    data1.labels.push(dates_Array[i]);

    data1.datasets[0].data.push(android_Downloads[i]);
    // data1.datasets[0].backgroundColor.push(color);
    data1.datasets[1].data.push(ios_Downloads[i]);
    //data1.datasets[1].backgroundColor.push(alternate_Color);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  //Guest User Graph
  const Bardata = {
    labels: [],
    datasets: [
      {
        label: "GUEST USERS",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
        pointBackgroundColor: ["red"],
        pointBorderColor: ["black"],
      },
    ],
  };
  //Bardata.update();

  for (var i = 0; i < guest_User_Array.length; i++) {
    Bardata.labels.push(dates_Array[i]);

    Bardata.datasets[0].backgroundColor.push(color);
    Bardata.datasets[0].data.push(guest_User_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }
  console.log(guest_User_Array);
  //NO OF SUBSCRIBERS Graph
  const subscriber_Chart = {
    labels: [],
    datasets: [
      {
        label: "SUBSCRIBERS",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
        pointBackgroundColor: ["red"],
        pointBorderColor: ["black"],
      },
    ],
  };
  //Bardata.update();

  for (var i = 0; i < sub_Array.length; i++) {
    subscriber_Chart.labels.push(dates_Array[i]);
    subscriber_Chart.datasets[0].backgroundColor.push(color);
    subscriber_Chart.datasets[0].data.push(sub_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }
  //Average Cpgu Graph
  const Revenue = {
    labels: [],
    datasets: [
      {
        label: "REVENUE",
        fill: false,
        lineTension: 0.1,
        backgroundColor: color,
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  };

  for (var i = 0; i < revenue_Array.length; i++) {
    Revenue.labels.push(final_Date[i]);
    //Revenue.datasets[0].backgroundColor = color;
    Revenue.datasets[0].data.push(revenue_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  const cpgu_Bar_Graph = {
    labels: [],
    datasets: [
      {
        label: "COST PER GUEST USER",
        data: [50, 100, 20, 30, 60, 70, 100, 80, 110, 150],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
      },
    ],
  };

  for (var i = 0; i < cpgu_Array.length; i++) {
    cpgu_Bar_Graph.labels.push(dates_Array[i]);
    cpgu_Bar_Graph.datasets[0].backgroundColor.push(color);
    cpgu_Bar_Graph.datasets[0].data.push(cpgu_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  const cps_Bar_Graph = {
    labels: [],

    datasets: [
      {
        label: "COST PER SUBSCRIBER",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
      },
    ],
  };

  for (var i = 0; i < cps_Array.length; i++) {
    cps_Bar_Graph.labels.push(dates_Array[i]);
    cps_Bar_Graph.datasets[0].backgroundColor.push(color);
    cps_Bar_Graph.datasets[0].data.push(cps_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  const avg_Time_Spent_Bar_Graph = {
    labels: [],

    datasets: [
      {
        label: "AVERAGE TIME SPENT",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
      },
    ],
  };

  for (var i = 0; i < avg_Time_Spent_Array.length; i++) {
    avg_Time_Spent_Bar_Graph.labels.push(dates_Array[i]);
    avg_Time_Spent_Bar_Graph.datasets[0].backgroundColor.push(color);
    avg_Time_Spent_Bar_Graph.datasets[0].data.push(avg_Time_Spent_Array[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  const fb_Likes_Chart = {
    labels: [],

    datasets: [
      {
        label: "FACEBOOK LIKES",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: "#4267B2",
      },
      {
        label: "FACEBOOK UNLIKES",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: "#898F9C",
      },
    ],
  };

  for (var i = 0; i < social_Dates_Array.length; i++) {
    fb_Likes_Chart.labels.push(social_Dates_Array[i]);
    //fb_Likes_Chart.datasets[0].backgroundColor.push(color);
    // fb_Likes_Chart.datasets[1].backgroundColor.push(alternate_Color);
    fb_Likes_Chart.datasets[0].data.push(fb_Likes[i]);
    fb_Likes_Chart.datasets[1].data.push(fb_Unlikes[i]);

    //  console.log('bd',Bardata.datasets[1].data)
  }

  const insta_Follow_Chart = {
    labels: [],

    datasets: [
      {
        label: "INSTA FOLLOW",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: "#8a3ab9",
      },
      {
        label: "INSTA POST",
        data: [],
        borderColor: ["black"],
        backgroundColor: "bc2a8d",
      },
    ],
  };

  for (var i = 0; i < social_Dates_Array.length; i++) {
    insta_Follow_Chart.labels.push(social_Dates_Array[i]);
    //insta_Follow_Chart.datasets[0].backgroundColor.push(color);
    insta_Follow_Chart.datasets[0].data.push(insta_Follow[i]);
    insta_Follow_Chart.datasets[1].data.push(insta_Post[i]);
    //insta_Follow_Chart.datasets[1].backgroundColor.push(alternate_Color);
    //  console.log('bd',Bardata.datasets[1].data)
  }

  const twitter_Chart = {
    labels: [],

    datasets: [
      {
        label: "TWITTER FOLLOW",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: "#1DA1F2",
      },
      {
        label: "TWITTER UNFOLLOW",
        data: [],
        borderColor: ["black"],
        backgroundColor: "#AAB8C2",
      },
      {
        label: "DAILY VISIT",
        data: [],
        borderColor: ["black"],
        backgroundColor: "#657786",
      },
    ],
  };

  for (var i = 0; i < social_Media.length; i++) {
    twitter_Chart.labels.push(social_Dates_Array[i]);
    //twitter_Chart.datasets[0].backgroundColor.push(color);

    twitter_Chart.datasets[0].data.push(twitter_Follow[i]);
    twitter_Chart.datasets[1].data.push(twitter_Unfollow[i]);
    twitter_Chart.datasets[2].data.push(daily_Visit_Array[i]);
    //twitter_Chart.datasets[1].backgroundColor.push(alternate_Color);
    //twitter_Chart.datasets[2].backgroundColor.push(alternate_Color);
  }

  //  console.log('bd',Bardata.datasets[1].data)

  const yt_Chart = {
    labels: [],

    datasets: [
      {
        label: "YOUTUBE LIKES",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: "#FF0000",
      },
      {
        label: "YOUTUBE UNLIKES",
        data: [],
        borderColor: ["black"],
        backgroundColor: "#657786",
      },
    ],
  };

  for (var i = 0; i < social_Dates_Array.length; i++) {
    yt_Chart.labels.push(social_Dates_Array[i]);
    //yt_Chart.datasets[0].backgroundColor.push(color);
    yt_Chart.datasets[0].data.push(yt_Likes[i]);
    yt_Chart.datasets[1].data.push(yt_Unlikes[i]);
    //yt_Chart.datasets[1].backgroundColor.push(alternate_Color);
    //  console.log('bd',Bardata.datasets[1].data)
  }

  const states = [
    "Bihar",

    "Gujarat",

    "Madhya Pradesh",
    "Maharashtra",

    "Odisha",

    "Rajasthan",

    "Tamil Nadu",
    "Telangana",

    "Uttar Pradesh",
    "West Bengal",
  ];
  const demo_Chart = {
    labels: [],

    datasets: [
      {
        label: "states",
        data: [],
        borderColor: ["rgba(255,209,86,1)"],
        backgroundColor: [],
      },
    ],
  };
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
  ];
  for (var i = 0; i < 10; i++) {
    //demo_Chart.labels.push(demo_Array[i])
    demo_Chart.labels.push(states[i]);

    demo_Chart.datasets[0].backgroundColor.push(colorArray[i]);
    demo_Chart.datasets[0].data.push(demo_Final[i]);
    //  console.log('bd',Bardata.datasets[1].data)
  }

  return (
    <>
      <Container fluid>
        <Row className="Dashboard-Title no-gutters">
          <Col lg={6}>
            <h2>DASHBOARD</h2>
          </Col>

          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={selecteddate1}
                  placeholder="from"
                  onChange={(date1) => setSelectedDate1(date1)}
                ></DatePicker>
              </Col>
              <Col lg={4} className="seconddatepicker">
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={selecteddate2}
                  onChange={(date2) => setSelectedDate2(date2)}
                ></DatePicker>
              </Col>

              <Col lg={4}>
                <div className="goButton">
                  <Button /*onClick={HandleSubmit()}*/>Go</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="Row1">
          <Col lg={{ span: 3 }} className="LiveCard">
            <Card
              style={{ width: "15rem", border: "none" }}
              className="FirstDiv"
            >
              <Card.Body>
                <Card.Text>DOWNLOADS</Card.Text>

                <Card.Title>
                  {resp.map((val, index) => {
                    <h1>{val.id}</h1>;
                  })}
                  {downloadstile}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={{ span: 3 }} className="LiveCard">
            <Card style={{ width: "15rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>GUEST USERS</Card.Text>

                <Card.Title>{guest_User}</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={{ span: 3 }} className="LiveCard">
            <Card style={{ width: "15rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>SUBSCRIBERS</Card.Text>
                <Card.Title>{Subscriber}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="LiveCard">
            <Card style={{ width: "15rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>REVENUE</Card.Text>
                <Card.Title>{revenuestore}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="Row2">
          <Col lg={4} className="LiveCard" bg="light">
            <Card style={{ width: "20rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>COST PER GUEST USER</Card.Text>
                <Card.Title>{cpgs}</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="LiveCard">
            <Card style={{ width: "20rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>COST PER SUBSCRIBER</Card.Text>
                <Card.Title>{cps}</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="LiveCard" bg="light">
            <Card style={{ width: "20rem" }} className="FirstDiv">
              <Card.Body>
                <Card.Text>AVERAGE TIME SPENT</Card.Text>
                <Card.Title>{avg_Time_Spent}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="chartheader">
          <Col>
            <h2>SOCIAL MEDIA</h2>
          </Col>
        </Row>

        <Container fluid>
          <Row>
            <Col lg={3}>
              <Row className="imageRow">
                <Col
                  style={{
                    backgroundColor: "blue",
                    height: "50px",
                    padding: "10px 0px 10px 0px",
                  }}
                >
                  <i
                    class="fa fa-twitter"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  ></i>
                </Col>
              </Row>
              <Row className="social_Content">
                <Col lg={4}>
                  <h5>{twitter_Follow_Total}</h5>
                  <span style={{ textAlign: "left" }}>FOLLOW</span>
                </Col>
                <Col lg={4}>
                  <h5>{daily_Visit_Total}</h5>
                  <span>
                    DAILY <br></br>VISIT
                  </span>
                </Col>
                <Col lg={4}>
                  <h5>{twitter_Likes_Total}</h5>
                  <span>LIKES</span>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <Row className="imageRow">
                <Col
                  style={{
                    backgroundColor: "red",
                    height: "50px",
                    padding: "10px 0px 10px 0px",
                  }}
                >
                  <i
                    class="fa fa-youtube"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  ></i>
                </Col>
              </Row>
              <Row className="social_Content">
                <Col lg={6}>
                  <h5>{yt_Unlikes_Total}</h5>
                  <span>FOLLOW</span>
                </Col>
                <Col lg={6}>
                  <h5>{yt_Likes_Total}</h5>
                  <span>LIKES</span>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="imageRow">
                <Col style={{ backgroundColor: "darkblue", height: "50px" }}>
                  <i
                    class="fa fa-facebook-f"
                    style={{
                      fontSize: "40px",
                      textAlign: "center",
                      padding: "10px 0px 10px 0px",
                    }}
                  ></i>
                </Col>
              </Row>
              <Row className="social_Content">
                <Col lg={6}>
                  <h5>{fb_Follow_Total}</h5>
                  <span>FOLLOW</span>
                </Col>
                <Col lg={6}>
                  <h5>{fb_Likes_Total}</h5>
                  <span>LIKES</span>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <Row className="imageRow">
                <Col style={{ backgroundColor: "#8a3ab9", height: "50px" }}>
                  <i
                    class="fa fa-instagram"
                    style={{
                      fontSize: "40px",
                      textAlign: "center",
                      padding: "10px 0px 10px 0px",
                    }}
                  ></i>
                </Col>
              </Row>
              <Row className="social_Content">
                <Col lg={6}>
                  <h5>{insta_Follow_Total}</h5>
                  <span>FOLLOW</span>
                </Col>
                <Col lg={6}>
                  <h5>{insta_Likes_Total}</h5>
                  <span>LIKES</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <div class="chart">
        {/*Total Downloads Line chart */}
        <Row className="chartheader">
          <Col>
            <h2>TOTAL DOWNLOADS</h2>
          </Col>
        </Row>

        <div className="chart1">
          <Row>
            <Col md={12} className="LineChart1">
              <Line data={data1} width={500} height={300} />
            </Col>
          </Row>
        </div>

        {/*Total Guest User Line chart */}
        <Row className="chartheader">
          <Col>
            <h2>GUEST USER</h2>
          </Col>
        </Row>
        <div className="chart2">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={Bardata} id="barChart" height={200} />
            </Col>
          </Row>
        </div>

        {/*Subscriber Bar Chart */}
        <Row className="chartheader">
          <Col>
            <h2>SUBSCRIBER</h2>
          </Col>
        </Row>
        <div class="chart3">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={subscriber_Chart} id="barChart" height={200} />
            </Col>
          </Row>
        </div>

        {/*Revenue Line Chart */}
        <Row className="chartheader">
          <Col>
            <h2>REVENUE</h2>
          </Col>
        </Row>
        <div className="chartrow4">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={Revenue} height={200} />
            </Col>
          </Row>
        </div>

        {/*Demographics Bar chart */}
        <Row className="chartheader">
          <Col>
            <h2>COST PER GUEST USER</h2>
          </Col>
        </Row>
        <div className="chartrow5">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={cpgu_Bar_Graph} height={200} />
            </Col>
          </Row>
        </div>

        {/*Cost per guest user Bar chart */}
        <Row className="chartheader">
          <Col>
            <h2>COST PER SUBSCRIBER</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={cps_Bar_Graph} height={200} />
            </Col>
          </Row>
        </div>

        {/*Cost per Subscriber Bar chart */}
        <Row className="chartheader">
          <Col>
            <h2>AVERAGE TIME SPENT</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={avg_Time_Spent_Bar_Graph} height={200} />
            </Col>
          </Row>
        </div>

        {/*Cost per Subscriber Bar chart */}
        <Row className="chartheader">
          <Col>
            <h2>FACEBOOK</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={fb_Likes_Chart} height={200} />
            </Col>
          </Row>
        </div>

        {/*INSTA */}
        <Row className="chartheader">
          <Col>
            <h2>INSTAGRAM</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={insta_Follow_Chart} height={200} />
            </Col>
          </Row>
        </div>

        <Row className="chartheader">
          <Col>
            <h2>TWITTER</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={twitter_Chart} height={200} />
            </Col>
          </Row>
        </div>

        <Row className="chartheader">
          <Col>
            <h2>YOUTUBE</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Bar data={yt_Chart} height={200} />
            </Col>
          </Row>
        </div>

        <Row className="chartheader">
          <Col>
            <h2>DEMOGRAPHICS</h2>
          </Col>
        </Row>
        <div className="chartrow6">
          <Row className="BarChart1">
            <Col md={12}>
              <Pie data={demo_Chart} height={200} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
