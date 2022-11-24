import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const tabs = ["T20", "ODI", "Test", "T10"]

const tabsData = [
  {
    type: "General points",
    data: [
      {
        "Type of Points": "Being a part of the starting XI",
        T20: 4,
        ODI: 4,
        Test: 4,
        T10: 4,
      },
      {
        "Type of Points": "Every run scored",
        T20: 1,
        ODI: 1,
        Test: 1,
        T10: 1,
      },
      {
        "Type of Points": "Every wicket taken (excluding run out)",
        T20: 25,
        ODI: 25,
        Test: 16,
        T10: 25,
      },
      {
        "Type of Points": "Catch taken",
        T20: 8,
        ODI: 8,
        Test: 8,
        T10: 8,
      },
      {
        "Type of Points": "Caught & Bowled",
        T20: 33,
        ODI: 33,
        Test: 24,
        T10: 33,
      },
      {
        "Type of Points": "Stumping/ Run Out (direct)",
        T20: 12,
        ODI: 12,
        Test: 12,
        T10: 12,
      },
      {
        "Type of Points": "Run Out (Thrower/Catcher)",
        T20: "6/6",
        ODI: "6/6",
        Test: "6/6",
        T10: "6/6",
      },
      {
        "Type of Points":
          "Dismissal for a Duck (only for batsmen, wicket-keepers and all-rounders)",
        T20: -2,
        ODI: -3,
        Test: -4,
        T10: -2,
      },
    ],
  },
  {
    type: "Bonus Points",
    data: [
      {
        "Type of Points": "Every boundary hit",
        T20: 1,
        ODI: 1,
        Test: 1,
        T10: 1,
      },
      {
        "Type of Points": "Every six-hit",
        T20: 2,
        ODI: 2,
        Test: 2,
        T10: 2,
      },
      {
        "Type of Points":
          "Half Century (50 runs scored by a batsman in a single innings)",
        T20: 8,
        ODI: 4,
        Test: 4,
        T10: 16,
      },
      {
        "Type of Points":
          "Century (100 runs scored by a batsman in a single innings)",
        T20: 16,
        ODI: 8,
        Test: 8,
        T10: "NA",
      },
      {
        "Type of Points": "Bonus (LBW / Bowled)",
        T20: 8,
        ODI: 8,
        Test: 8,
        T10: 8,
      },
      {
        "Type of Points": "3 Catch Bonus",
        T20: 4,
        ODI: 4,
        Test: "NA",
        T10: 4,
      },
      {
        "Type of Points": "Maiden Over",
        T20: 12,
        ODI: 4,
        Test: "NA",
        T10: 16,
      },
      {
        "Type of Points": "4 wickets",
        T20: 8,
        ODI: 4,
        Test: 4,
        T10: "NA",
      },
      {
        "Type of Points": "5 wickets",
        T20: 16,
        ODI: 8,
        Test: 8,
        T10: "NA",
      },
      {
        "Type of Points": "2 wickets",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 8,
      },
      {
        "Type of Points": "3 wickets",
        T20: 4,
        ODI: "NA",
        Test: "NA",
        T10: 16,
      },
      {
        "Type of Points": "30 runs scored by a batsman in a single innings",
        T20: 4,
        ODI: "NA",
        Test: "NA",
        T10: 8,
      },
      {
        "Type of Points": "50 runs scored by a batsman in a single innings",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 16,
      },
    ],
  },
  {
    type: "Economy Rate",
    data: [
      {
        "Type of Points": "Minimum overs bowled by player to be applicable",
        T20: "2 overs",
        ODI: "5 overs",
        Test: "NA",
        T10: "1 over",
      },
      {
        "Type of Points": "Below 5 runs per over",
        T20: 6,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 5 and 5.99 runs per over",
        T20: 4,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 6 and 7 runs per over",
        T20: 2,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 10 and 11 runs per over",
        T20: -2,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 11.01 and 12 runs per over",
        T20: -4,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Above 12 runs per over",
        T20: -6,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Below 2.5 runs per over",
        T20: "NA",
        ODI: 6,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 2.5 and 3.49 runs per over",
        T20: "NA",
        ODI: 4,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 3.5 and 4.5 runs per over",
        T20: "NA",
        ODI: 2,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 7 and 8 runs per over",
        T20: "NA",
        ODI: -2,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 8.01 and 9 runs per over",
        T20: "NA",
        ODI: -4,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Above 9 runs per over",
        T20: "NA",
        ODI: -6,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Below 7 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 6,
      },
      {
        "Type of Points": "Between 7 and 7.99 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 4,
      },
      {
        "Type of Points": "Between 8 and 9 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 2,
      },
      {
        "Type of Points": "Between 14 and 15 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -2,
      },
      {
        "Type of Points": "Between 15.01 and 16 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -4,
      },
      {
        "Type of Points": "Above 16 runs per over",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -6,
      },
    ],
  },
  {
    type: "Strike Rate (except Bowlers)",
    data: [
      {
        "Type of Points": "Minimum balls faced by a player to be applicable",
        T20: "10 balls",
        ODI: "20 balls",
        Test: "NA",
        T10: "5 balls",
      },
      {
        "Type of Points": "Between 60 and 70 runs per 100 balls",
        T20: -2,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 50 and 59.99 runs per 100 balls",
        T20: -4,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Below 50 runs per 100 balls",
        T20: -6,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 130 and 150 runs per 100 balls",
        T20: 2,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 150.01 and 170 runs per 100 balls",
        T20: 4,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Above 170 runs per 100 balls",
        T20: 6,
        ODI: "NA",
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 40 and 50 runs per 100 balls",
        T20: "NA",
        ODI: -2,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 30 and 39.99 runs per 100 balls",
        T20: "NA",
        ODI: -4,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Below 30 runs per 100 balls",
        T20: "NA",
        ODI: -6,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 100 and 120 runs per 100 balls",
        T20: "NA",
        ODI: 2,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 120.01 and 140 runs per 100 balls",
        T20: "NA",
        ODI: 4,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Above 140 runs per 100 balls",
        T20: "NA",
        ODI: 6,
        Test: "NA",
        T10: "NA",
      },
      {
        "Type of Points": "Between 70 and 80 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -2,
      },
      {
        "Type of Points": "Between 60 and 69.99 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -4,
      },
      {
        "Type of Points": "Below 60 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: -6,
      },
      {
        "Type of Points": "Between 150 and 170 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 2,
      },
      {
        "Type of Points": "Between 170.01 and 190 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 4,
      },
      {
        "Type of Points": "Over 190 runs per 100 balls",
        T20: "NA",
        ODI: "NA",
        Test: "NA",
        T10: 6,
      },
    ],
  },
]

export default function Home() {
  const [tabSelected, setTabSelected] = useState(tabs[0])
  const [subTabSelected, setSubTabSelected] = useState(0)
  return (
    <>
      <div className="min-w-[Max(360px,90%)] max-w-[1200px] bg-[#171925] px-[20px] py-[20px] font-bold min-h-screen">
        <div className="text-[16px] text-white">
          Fantasy Point System on Devine 11
        </div>
        <div className="text-[14px] text-[#6D6F7E] my-[20px] font-normal	">
          Are you just getting started with Fantasy games? Whether it is fantasy
          cricket having an understanding about the points system is the best
          way to select matches and get started with it. The total points
          calculated for each match, will be basis the grid below. So, pick your
          game, select your players and map your scorecard as the match results
          are shown. For further understanding on how to get started, check our
          How To Play page and tips & tricks section.
        </div>
        <div className="bg-[#1A212B] flex rounded-3xl min-h-[45px] justify-center cursor-pointer">
          {tabs.map((tab) => (
            <div
              className={`bg-[#1A212B] min-w-[80px] flex items-center justify-center flex-1 text-center text-[#6D6F7E] rounded-3xl ${
                tabSelected === tab ? "bg-[#D5192B] text-[#F9E2E5]" : ""
              }`}
              key={tab}
              onClick={() => {
                setTabSelected(tab)
                setSubTabSelected(-1)
              }}
              style={{
                ...(tabSelected === tab && {
                  background:
                    "linear-gradient(145.93deg, #FD371F 9.76%, #CD132E 48.18%, #D93C2E 64.35%, #F9A92D 107.84%), #FFFFFF",
                }),
              }}
            >
              <span>{tab}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#1A212B] mt-[20px] rounded-lg px-[30px] border-[#213B55] border">
          {tabsData.map((subTabs, index) => {
            return (
              <div key={subTabs.type}>
                <div
                  className="heading text-white min-h-[60px] font-bold	flex items-center border-b border-[#282B38]"
                  onClick={() =>
                    index === subTabSelected
                      ? setSubTabSelected(-1)
                      : setSubTabSelected(index)
                  }
                >
                  <div className="flex justify-between items-center text-[16px] w-full cursor-pointer">
                    <span className="font-semibold	">{subTabs.type}</span>
                    <span className="text-[#D5192B] text-3xl">
                      {index === subTabSelected ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <AnimatePresence>
                  {index === subTabSelected && (
                    <motion.div
                      className="data font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {subTabs.data.map((data) => (
                        <div
                          key={data["Type of Points"]}
                          className="flex justify-between items-center min-h-[50px] border-[#282B38] border-t text-[14px]"
                        >
                          <span className="text-[#6D6F7E]">
                            {data["Type of Points"]}
                          </span>
                          <span className="text-white">
                            {/* @ts-ignore */}
                            {data[tabSelected]}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
