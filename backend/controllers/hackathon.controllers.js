import mongoose from "mongoose"
import express from 'express'
import hackathonModel from "../models/hackathon.models.js"
import { all } from "axios"

export const sendHackathons = async (req,res) => {
    try {
        const allHackathons = await hackathonModel.find({
            status: true
        })
        res.status(200).json({
            allHackathons
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })     
    }
}
export const sendInactiveHackathons = async (req,res) => {
    try {
        const allHackathons = await hackathonModel.find({
            status: false
        })
        res.status(200).json({
            allHackathons
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })     
    }
}
// above code sent all inactive hackathons while below code sent only expired hackathons
export const sendExpiredHackathons = async(req,res)=>{
    try{
        const currentTime = new Date(Date.now())
        const expiredHackathons = await hackathonModel.find({
            status : false,
            endDate : {$lt : currentTime}
        })

        res.status(200).json({
            expiredHackathons
        })
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}