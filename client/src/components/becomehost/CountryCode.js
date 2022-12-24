import React from "react";

const CountryCode = ({ setHouseData, houseData }) => {
  console.log("country code", houseData.country);
  return (
    <select
      className="form-control w-[30rem] rounded-full py-[25px] h-[45px] pl-[16px]"
      name="countryCode"
      id=""
      onChange={(e) => setHouseData({ ...houseData, country: e.target.value })}
    >
      <option value="GB" Selected>
        UK
      </option>
      <option value="US">USA</option>

      <option value="DZ" value1="213">
        Algeria
      </option>
      <option value="AD" value1="376">
        Andorra
      </option>
      <option value="AO" value1="244">
        Angola
      </option>
      <option value="AI" value1="1264">
        Anguilla (+1264)
      </option>
      <option value="AG" value1="1268">
        Antigua &amp; Barbuda (+1268)
      </option>
      <option value="AR" value1="54">
        Argentina (+54)
      </option>
      <option value="AM" value1="374">
        Armenia (+374)
      </option>
      <option value="AW" value1="297">
        Aruba (+297)
      </option>
      <option value="AU" value1="61">
        Australia (+61)
      </option>
      <option value="AT" value1="43">
        Austria (+43)
      </option>
      <option value="AZ" value1="994">
        Azerbaijan (+994)
      </option>
      <option value="BS" value1="1242">
        Bahamas (+1242)
      </option>
      <option value="BH" value1="973">
        Bahrain (+973)
      </option>
      <option value="BD" value1="880">
        Bangladesh (+880)
      </option>
      <option value="BB" value1="1246">
        Barbados (+1246)
      </option>
      <option value="BY" value1="375">
        Belarus (+375)
      </option>
      <option value="BE" value1="32">
        Belgium (+32)
      </option>
      <option value="BZ" value1="501">
        Belize (+501)
      </option>
      <option value="BJ" value1="229">
        Benin (+229)
      </option>
      <option value="BM" value1="1441">
        Bermuda (+1441)
      </option>
      <option value="BT" value1="975">
        Bhutan (+975)
      </option>
      <option value="BO" value1="591">
        Bolivia (+591)
      </option>
      <option value="BA" value1="387">
        Bosnia Herzegovina (+387)
      </option>
      <option value="BW" value1="267">
        Botswana (+267)
      </option>
      <option value="BR" value1="55">
        Brazil (+55)
      </option>
      <option value="BN" value1="673">
        Brunei (+673)
      </option>
      <option value="BG" value1="359">
        Bulgaria (+359)
      </option>
      <option value="BF" value1="226">
        Burkina Faso (+226)
      </option>
      <option value="BI" value1="257">
        Burundi (+257)
      </option>
      <option value="KH" value1="855">
        Cambodia (+855)
      </option>
      <option value="CM" value1="237">
        Cameroon (+237)
      </option>
      <option value="CA" value1="1">
        Canada (+1)
      </option>
      <option value="CV" value1="238">
        Cape Verde Islands (+238)
      </option>
      <option value="KY" value1="1345">
        Cayman Islands (+1345)
      </option>
      <option value="CF" value1="236">
        Central African Republic (+236)
      </option>
      <option value="CL" value1="56">
        Chile (+56)
      </option>
      <option value="CN" value1="86">
        China (+86)
      </option>
      <option value="CO" value1="57">
        Colombia (+57)
      </option>
      <option value="KM" value1="269">
        Comoros (+269)
      </option>
      <option value="CG" value1="242">
        Congo (+242)
      </option>
      <option value="CK" value1="682">
        Cook Islands (+682)
      </option>
      <option value="CR" value1="506">
        Costa Rica (+506)
      </option>
      <option value="HR" value1="385">
        Croatia (+385)
      </option>
      <option value="CU" value1="53">
        Cuba (+53)
      </option>
      <option value="CY" value1="90392">
        Cyprus North (+90392)
      </option>
      <option value="CY" value1="357">
        Cyprus South (+357)
      </option>
      <option value="CZ" value1="42">
        Czech Republic (+42)
      </option>
      <option value="DK" value1="45">
        Denmark (+45)
      </option>
      <option value="DJ" value1="253">
        Djibouti (+253)
      </option>
      <option value="DM" value1="1809">
        Dominica (+1809)
      </option>
      <option value="DO" value1="1809">
        Dominican Republic (+1809)
      </option>
      <option value="EC" value1="593">
        Ecuador (+593)
      </option>
      <option value="EG" value1="20">
        Egypt (+20)
      </option>
      <option value="SV" value1="503">
        El Salvador (+503)
      </option>
      <option value="GQ" value1="240">
        Equatorial Guinea (+240)
      </option>
      <option value="ER" value1="291">
        Eritrea (+291)
      </option>
      <option value="EE" value1="372">
        Estonia (+372)
      </option>
      <option value="ET" value1="251">
        Ethiopia (+251)
      </option>
      <option value="FK" value1="500">
        Falkland Islands (+500)
      </option>
      <option value="FO" value1="298">
        Faroe Islands (+298)
      </option>
      <option value="FJ" value1="679">
        Fiji (+679)
      </option>
      <option value="FI" value1="358">
        Finland (+358)
      </option>
      <option value="FR" value1="33">
        France (+33)
      </option>
      <option value="GF" value1="594">
        French Guiana (+594)
      </option>
      <option value="PF" value1="689">
        French Polynesia (+689)
      </option>
      <option value="GA" value1="241">
        Gabon (+241)
      </option>
      <option value="GM" value1="220">
        Gambia (+220)
      </option>
      <option value="GE" value1="7880">
        Georgia (+7880)
      </option>
      <option value="DE" value1="49">
        Germany (+49)
      </option>
      <option value="GH" value1="233">
        Ghana (+233)
      </option>
      <option value="GI" value1="350">
        Gibraltar (+350)
      </option>
      <option value="GR" value1="30">
        Greece (+30)
      </option>
      <option value="GL" value1="299">
        Greenland (+299)
      </option>
      <option value="GD" value1="1473">
        Grenada (+1473)
      </option>
      <option value="GP" value1="590">
        Guadeloupe (+590)
      </option>
      <option value="GU" value1="671">
        Guam (+671)
      </option>
      <option value="GT" value1="502">
        Guatemala (+502)
      </option>
      <option value="GN" value1="224">
        Guinea (+224)
      </option>
      <option value="GW" value1="245">
        Guinea - Bissau (+245)
      </option>
      <option value="GY" value1="592">
        Guyana (+592)
      </option>
      <option value="HT" value1="509">
        Haiti (+509)
      </option>
      <option value="HN" value1="504">
        Honduras (+504)
      </option>
      <option value="HK" value1="852">
        Hong Kong (+852)
      </option>
      <option value="HU" value1="36">
        Hungary (+36)
      </option>
      <option value="IS" value1="354">
        Iceland (+354)
      </option>
      <option value="IN" value1="91">
        India (+91)
      </option>
      <option value="ID" value1="62">
        Indonesia (+62)
      </option>
      <option value="IR" value1="98">
        Iran (+98)
      </option>
      <option value="IQ" value1="964">
        Iraq (+964)
      </option>
      <option value="IE" value1="353">
        Ireland (+353)
      </option>
      <option value="IL" value1="972">
        Israel (+972)
      </option>
      <option value="IT" value1="39">
        Italy (+39)
      </option>
      <option value="JM" value1="1876">
        Jamaica (+1876)
      </option>
      <option value="JP" value1="81">
        Japan (+81)
      </option>
      <option value="JO" value1="962">
        Jordan (+962)
      </option>
      <option value="KZ" value1="7">
        Kazakhstan (+7)
      </option>
      <option value="KE" value1="254">
        Kenya (+254)
      </option>
      <option value="KI" value1="686">
        Kiribati (+686)
      </option>
      <option value="KP" value1="850">
        Korea North (+850)
      </option>
      <option value="KR" value1="82">
        Korea South (+82)
      </option>
      <option value="KW" value1="965">
        Kuwait (+965)
      </option>
      <option value="KG" value1="996">
        Kyrgyzstan (+996)
      </option>
      <option value="LA" value1="856">
        Laos (+856)
      </option>
      <option value="LV" value1="371">
        Latvia (+371)
      </option>
      <option value="LB" value1="961">
        Lebanon (+961)
      </option>
      <option value="LS" value1="266">
        Lesotho (+266)
      </option>
      <option value="LR" value1="231">
        Liberia (+231)
      </option>
      <option value="LY" value1="218">
        Libya (+218)
      </option>
      <option value="LI" value1="417">
        Liechtenstein (+417)
      </option>
      <option value="LT" value1="370">
        Lithuania (+370)
      </option>
      <option value="LU" value1="352">
        Luxembourg (+352)
      </option>
      <option value="MO" value1="853">
        Macao (+853)
      </option>
      <option value="MK" value1="389">
        Macedonia (+389)
      </option>
      <option value="MG" value1="261">
        Madagascar (+261)
      </option>
      <option value="MW" value1="265">
        Malawi (+265)
      </option>
      <option value="MY" value1="60">
        Malaysia (+60)
      </option>
      <option value="MV" value1="960">
        Maldives (+960)
      </option>
      <option value="ML" value1="223">
        Mali (+223)
      </option>
      <option value="MT" value1="356">
        Malta (+356)
      </option>
      <option value="MH" value1="692">
        Marshall Islands (+692)
      </option>
      <option value="MQ" value1="596">
        Martinique (+596)
      </option>
      <option value="MR" value1="222">
        Mauritania (+222)
      </option>
      <option value="YT" value1="269">
        Mayotte (+269)
      </option>
      <option value="MX" value1="52">
        Mexico (+52)
      </option>
      <option value="FM" value1="691">
        Micronesia (+691)
      </option>
      <option value="MD" value1="373">
        Moldova (+373)
      </option>
      <option value="MC" value1="377">
        Monaco (+377)
      </option>
      <option value="MN" value1="976">
        Mongolia (+976)
      </option>
      <option value="MS" value1="1664">
        Montserrat (+1664)
      </option>
      <option value="MA" value1="212">
        Morocco (+212)
      </option>
      <option value="MZ" value1="258">
        Mozambique (+258)
      </option>
      <option value="MN" value1="95">
        Myanmar (+95)
      </option>
      <option value="NA" value1="264">
        Namibia (+264)
      </option>
      <option value="NR" value1="674">
        Nauru (+674)
      </option>
      <option value="NP" value1="977">
        Nepal (+977)
      </option>
      <option value="NL" value1="31">
        Netherlands (+31)
      </option>
      <option value="NC" value1="687">
        New Caledonia (+687)
      </option>
      <option value="NZ" value1="64">
        New Zealand (+64)
      </option>
      <option value="NI" value1="505">
        Nicaragua (+505)
      </option>
      <option value="NE" value1="227">
        Niger (+227)
      </option>
      <option value="NG" value1="234">
        Nigeria (+234)
      </option>
      <option value="NU" value1="683">
        Niue (+683)
      </option>
      <option value="NF" value1="672">
        Norfolk Islands (+672)
      </option>
      <option value="NP" value1="670">
        Northern Marianas (+670)
      </option>
      <option value="NO" value1="47">
        Norway (+47)
      </option>
      <option value="OM" value1="968">
        Oman (+968)
      </option>
      <option value="PW" value1="680">
        Palau (+680)
      </option>
      <option value="PA" value1="507">
        Panama (+507)
      </option>
      <option value="PG" value1="675">
        Papua New Guinea (+675)
      </option>
      <option value="PY" value1="595">
        Paraguay (+595)
      </option>
      <option value="PE" value1="51">
        Peru (+51)
      </option>
      <option value="PH" value1="63">
        Philippines (+63)
      </option>
      <option value="PL" value1="48">
        Poland (+48)
      </option>
      <option value="PT" value1="351">
        Portugal (+351)
      </option>
      <option value="PR" value1="1787">
        Puerto Rico (+1787)
      </option>
      <option value="QA" value1="974">
        Qatar (+974)
      </option>
      <option value="RE" value1="262">
        Reunion (+262)
      </option>
      <option value="RO" value1="40">
        Romania (+40)
      </option>
      <option value="RU" value1="7">
        Russia (+7)
      </option>
      <option value="RW" value1="250">
        Rwanda (+250)
      </option>
      <option value="SM" value1="378">
        San Marino (+378)
      </option>
      <option value="ST" value1="239">
        Sao Tome &amp; Principe (+239)
      </option>
      <option value="SA" value1="966">
        Saudi Arabia (+966)
      </option>
      <option value="SN" value1="221">
        Senegal (+221)
      </option>
      <option value="CS" value1="381">
        Serbia (+381)
      </option>
      <option value="SC" value1="248">
        Seychelles (+248)
      </option>
      <option value="SL" value1="232">
        Sierra Leone (+232)
      </option>
      <option value="SG" value1="65">
        Singapore (+65)
      </option>
      <option value="SK" value1="421">
        Slovak Republic (+421)
      </option>
      <option value="SI" value1="386">
        Slovenia (+386)
      </option>
      <option value="SB" value1="677">
        Solomon Islands (+677)
      </option>
      <option value="SO" value1="252">
        Somalia (+252)
      </option>
      <option value="ZA" value1="27">
        South Africa (+27)
      </option>
      <option value="ES" value1="34">
        Spain (+34)
      </option>
      <option value="LK" value1="94">
        Sri Lanka (+94)
      </option>
      <option value="SH" value1="290">
        St. Helena (+290)
      </option>
      <option value="KN" value1="1869">
        St. Kitts (+1869)
      </option>
      <option value="SC" value1="1758">
        St. Lucia (+1758)
      </option>
      <option value="SD" value1="249">
        Sudan (+249)
      </option>
      <option value="SR" value1="597">
        Suriname (+597)
      </option>
      <option value="SZ" value1="268">
        Swaziland (+268)
      </option>
      <option value="SE" value1="46">
        Sweden (+46)
      </option>
      <option value="CH" value1="41">
        Switzerland (+41)
      </option>
      <option value="SI" value1="963">
        Syria (+963)
      </option>
      <option value="TW" value1="886">
        Taiwan (+886)
      </option>
      <option value="TJ" value1="7">
        Tajikstan (+7)
      </option>
      <option value="TH" value1="66">
        Thailand (+66)
      </option>
      <option value="TG" value1="228">
        Togo (+228)
      </option>
      <option value="TO" value1="676">
        Tonga (+676)
      </option>
      <option value="TT" value1="1868">
        Trinidad &amp; Tobago (+1868)
      </option>
      <option value="TN" value1="216">
        Tunisia (+216)
      </option>
      <option value="TR" value1="90">
        Turkey (+90)
      </option>
      <option value="TM" value1="7">
        Turkmenistan (+7)
      </option>
      <option value="TM" value1="993">
        Turkmenistan (+993)
      </option>
      <option value="TC" value1="1649">
        Turks &amp; Caicos Islands (+1649)
      </option>
      <option value="TV" value1="688">
        Tuvalu (+688)
      </option>
      <option value="UG" value1="256">
        Uganda (+256)
      </option>
      <option value="GB" value1="44">
        UK (+44)
      </option>
      <option value="UA" value1="380">
        Ukraine (+380)
      </option>
      <option value="AE" value1="971">
        United Arab Emirates (+971)
      </option>
      <option value="UY" value1="598">
        Uruguay (+598)
      </option>
      <option value="US" value1="1">
        USA (+1)
      </option>
      <option value="UZ" value1="7">
        Uzbekistan (+7)
      </option>
      <option value="VU" value1="678">
        Vanuatu (+678)
      </option>
      <option value="VA" value1="379">
        Vatican City (+379)
      </option>
      <option value="VE" value1="58">
        Venezuela (+58)
      </option>
      <option value="VN" value1="84">
        Vietnam (+84)
      </option>
      <option value="VG" value1="84">
        Virgin Islands - British (+1284)
      </option>
      <option value="VI" value1="84">
        Virgin Islands - US (+1340)
      </option>
      <option value="WF" value1="681">
        Wallis &amp; Futuna (+681)
      </option>
      <option value="YE" value1="969">
        Yemen (North)(+969)
      </option>
      <option value="YE" value1="967">
        Yemen (South)(+967)
      </option>
      <option value="ZM" value1="260">
        Zambia (+260)
      </option>
      <option value="ZW" value1="263">
        Zimbabwe (+263)
      </option>
    </select>
  );
};

export default CountryCode;
