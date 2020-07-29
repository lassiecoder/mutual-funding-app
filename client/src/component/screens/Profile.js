import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Profile =() => {
    return(
        <div className="profileWrapper">

            <div className="heading">
                <div className="policyName">
                    <div className="name">
                        <div><img alt="logo" src="https://groww.in/images/partners/axis_groww.svg" /></div>
                        <div><h2>Axis Bluechip Fund Direct Plan Growth</h2></div>
                    </div>
                    <div className="policyFeed">
                        <span className="btn">Equality</span>
                        <span className="btn">Large Cap</span>
                        <span className="btn">5.0 <span id="star"><i className="material-icons star">star</i></span> </span>
                    </div>
                </div>
                <div className="yearReturn">
                    <div className="percentReturn"> <h2>6.76 %</h2> </div>
                    <div className="oneYearReturn"> <h6> 1 Year Return </h6> </div>
                </div>
            </div>

            <div className="sparkline">
                <div className="sparklineData">
                    <Sparklines data={[5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15]}>
                        <SparklinesLine color="#26a69a" />
                    </Sparklines>
                </div>
                <div className="policyDetails">
                    <p>
                    Axis Bluechip Fund Direct Plan Growth is a Equity Mutual Fund Scheme launched by Axis Mutual Fund. This scheme was made available to investors on 01 Jan 2013. Shreyash Devalkar is the Current Fund Manager of Axis Bluechip Fund Direct Plan Growth fund.The fund currently has an Asset Under Management(AUM) of ₹14,522 Cr and the Latest NAV as of 28 Jul 2020 is ₹33.36.
                    </p>
                </div>
            </div>

            <h4> Fund Details </h4>
            <div className="fundDetails">
                
                <div className="lhsDetails">
                    <ul className="collection">
                        <li className="collection-item"> <div>Risk</div> <div>Moderately High</div> </li>
                        <li className="collection-item"> <div>Min SIP Amount</div> <div>₹500</div> </li>
                        <li className="collection-item"> <div>Expense Ratio</div> <div>0.43%</div> </li>
                    </ul>
                </div>
                <div className="rhsDetails">
                    <ul className="collection">
                        <li className="collection-item"> <div>NAV</div> <div>₹33.36 (28 Jul 2020)</div> </li>
                        <li className="collection-item"> <div>Fund Started</div> <div>01 Jan 2013</div> </li>
                        <li className="collection-item"> <div>Fund Size</div> <div>₹14,522 Cr</div> </li>
                    </ul>
                </div>
            </div>

            <div className="prosCons">
                <div className="lhsDetails">
                    <h4>Pros</h4>
                    <ol className="collection">
                        <li className="collection-item"><span>Lower expense ratio - 0.44%</span></li>
                        <li className="collection-item"><span>1Y Returns are higher than the category average returns</span></li>
                        <li className="collection-item"><span>3Y Returns are higher than the category average returns</span></li>
                        <li className="collection-item"><span>5Y Returns are higher than the category average returns</span></li>
                    </ol>
                </div>
                <div className="lhsDetails">
                    <h4>Cons</h4>
                    <ol className="collection">
                        <li className="collection-item"> <span>Risk-adjusted returns are lower compared to the category</span> </li>
                    </ol>
                </div>
            </div>

            <div className="aboutPolicy">
                <h4> Axis Bluechip Fund Direct Plan Growth Details </h4>

                <p> Axis Bluechip Fund Direct Plan Growth is a Equity Mutual Fund Scheme launched by Axis Mutual Fund. This scheme was made available to investors on 01 Jan 2013. Shreyash Devalkar is the Current Fund Manager of Axis Bluechip Fund Direct Plan Growth fund.The fund currently has an Asset Under Management(AUM) of ₹14,522 Cr and the Latest NAV as of 28 Jul 2020 is ₹33.36. </p>

                <p> The Axis Bluechip Fund Direct Plan Growth is rated Moderately High risk. Minimum SIP Investment is set to 500. Minimum Lumpsum Investment is 5000. For units in excess of 10% of the investment,1% will be charged for redemption within 12 months </p>

                <p> As the name suggests, Axis blue-chip fund-growth invests in blue-chip stocks, or stocks of predominantly large companies, which are financially sound, and well established. The stocks are less volatile than mid-cap and small-cap stocks, traded frequently, and have adequate liquidity as a result. The stocks that the Axis Blue Chip fund intends to invest in have the potential to perform long-term due to their proven track record. </p>

            <h5> Investment Objective </h5>

            <p> To achieve long term capital appreciation by investing in a diversified portfolio predominantly consisting of equity and equity related securities including derivatives. Howerver, there can be no assurance that the investment objective of the scheme will be achieved. </p>

            <p> Axis Blue Chip Fund-Direct ( Growth), being an equity fund, is suitable for investors aiming for long term capital appreciation,ideally with an investment horizon of more than five years. There is no lock-in period in this fund, however. </p>

            <h5> Tax Implications </h5>

            <p> Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year. </p>

            <p> If the investment in the Axis Blue Chip Fund Growth plan is redeemed before one year, it will be taxed as per STCG, which is currently at 15%. There will be no tax liability as long as the fund units are held. There is no surcharge included in this rate. </p>

            </div>
        
        </div>
    )
}
export default Profile