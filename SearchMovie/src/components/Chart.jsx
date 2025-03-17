import { chart } from "highcharts";

const option = {
    chart:{
        type: 'area'
    },
    title:{
        text: null
    },

    credits:{
        enabled: false
    },
    series:[
        {
            name:"India", color:"red",
            data:[
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1179, 1803, 2822, 3692, 5543, 73455, 12298, 18638, 22229, 25540,
                26516, 27835, 29537, 31255, 
            ]
        },
               {
            name:"USA", color:"blue",
            data:[
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1179, 1803, 2822, 3692, 5543, 73455, 12298, 18638, 22229, 25540,
                26516, 27835, 29537, 31255, 
            ]
        },
    


    ]

}
 
export default option;