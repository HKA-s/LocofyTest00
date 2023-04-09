import { useState, useCallback } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import Network from "./Network";
import PortalPopup from "./PortalPopup";

const FormMaticEth = () => {
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [dropdown1AnchorEl, setDropdown1AnchorEl] = useState(null);
  const [dropdown2AnchorEl, setDropdown2AnchorEl] = useState(null);
  const [dropdown3AnchorEl, setDropdown3AnchorEl] = useState(null);
  const [isNetworkOpen, setNetworkOpen] = useState(false);
  const dropdownOpen = Boolean(dropdownAnchorEl);
  const handleDropdownClick = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };
  const dropdown1Open = Boolean(dropdown1AnchorEl);
  const handleDropdown1Click = (event) => {
    setDropdown1AnchorEl(event.currentTarget);
  };
  const handleDropdown1Close = () => {
    setDropdown1AnchorEl(null);
  };
  const dropdown2Open = Boolean(dropdown2AnchorEl);
  const handleDropdown2Click = (event) => {
    setDropdown2AnchorEl(event.currentTarget);
  };
  const handleDropdown2Close = () => {
    setDropdown2AnchorEl(null);
  };
  const dropdown3Open = Boolean(dropdown3AnchorEl);
  const handleDropdown3Click = (event) => {
    setDropdown3AnchorEl(event.currentTarget);
  };
  const handleDropdown3Close = () => {
    setDropdown3AnchorEl(null);
  };

  const openNetwork = useCallback(() => {
    setNetworkOpen(true);
  }, []);

  const closeNetwork = useCallback(() => {
    setNetworkOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Out/Invest" to the project
  }, []);

  return (
    <>
      <div className="absolute top-[10.81rem] left-[11.75rem] w-[66.5rem] flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1rem] text-w font-mobile-wireframe-body-large">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
          <div
            className="self-stretch rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start gap-[0.25rem]"
            ChooseNetwork
          >
            <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
              Choose network
            </div>
            <div className="self-stretch cursor-pointer" onClick={openNetwork}>
              <Button
                id="button-Ethereum"
                aria-controls="menu-Ethereum"
                aria-haspopup="true"
                aria-expanded={dropdownOpen ? "true" : undefined}
                onClick={handleDropdownClick}
                color="primary"
              >
                Ethereum
              </Button>
              <Menu
                anchorEl={dropdownAnchorEl}
                open={dropdownOpen}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>Ethereum</MenuItem>
              </Menu>
            </div>
          </div>
          <div
            className="self-stretch rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start gap-[0.5rem]"
            MyWallet
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                My wallet
              </div>
              <label className="relative text-[0.88rem] tracking-[0.1px] leading-[1.31rem]">
                $12,842.63
              </label>
            </div>
            <div className="self-stretch rounded-21xl bg-gray-400 flex flex-row p-[0.5rem] items-center justify-center gap-[0.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                  alt=""
                  src="/cryptomatic1.svg"
                />
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  MATIC
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[0.25rem] text-right">
                <div className="flex-1 relative leading-[1.5rem]">872,90</div>
                <div className="relative leading-[1.5rem] hidden">%</div>
              </div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                alt=""
                src="/expand-more1.svg"
              />
            </div>
            <div className="self-stretch rounded-21xl bg-gray-400 flex flex-row p-[0.5rem] items-center justify-center gap-[0.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                  alt=""
                  src="/cryptobtc.svg"
                />
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  BTC
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[0.25rem] text-right">
                <div className="flex-1 relative leading-[1.5rem]">0.42</div>
                <div className="relative leading-[1.5rem] hidden">%</div>
              </div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                alt=""
                src="/expand-more1.svg"
              />
            </div>
            <div className="self-stretch rounded-21xl bg-gray-400 flex flex-row p-[0.5rem] items-center justify-center gap-[0.75rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                  alt=""
                  src="/cryptoeth.svg"
                />
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  ETH
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[0.25rem] text-right">
                <div className="flex-1 relative leading-[1.5rem]">2,64</div>
                <div className="relative leading-[1.5rem] hidden">%</div>
              </div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                alt=""
                src="/expand-more1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1.5rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  Sell
                </div>
                <div className="self-stretch">
                  <Button
                    id="button-ETH"
                    aria-controls="menu-ETH"
                    aria-haspopup="true"
                    aria-expanded={dropdown1Open ? "true" : undefined}
                    onClick={handleDropdown1Click}
                    color="primary"
                  >
                    ETH
                  </Button>
                  <Menu
                    anchorEl={dropdown1AnchorEl}
                    open={dropdown1Open}
                    onClose={handleDropdown1Close}
                  />
                </div>
              </div>
              <div className="h-[4.19rem] flex flex-row items-end justify-center">
                <div
                  className="rounded-23xl bg-darkslategray shadow-[0px_0px_7px_rgba(16,_13,_48,_0.7)_inset] flex flex-row p-[0.75rem] items-center justify-start cursor-pointer"
                  onClick={onButtonContainerClick}
                >
                  <img
                    className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                    alt=""
                    src="/compare-arrows.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  Buy
                </div>
                <div className="self-stretch">
                  <Button
                    id="button-MATIC"
                    aria-controls="menu-MATIC"
                    aria-haspopup="true"
                    aria-expanded={dropdown2Open ? "true" : undefined}
                    onClick={handleDropdown2Click}
                    color="primary"
                  >
                    MATIC
                  </Button>
                  <Menu
                    anchorEl={dropdown2AnchorEl}
                    open={dropdown2Open}
                    onClose={handleDropdown2Close}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start gap-[0.25rem]">
            <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
              Investment amount
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.25rem]">
              <div className="flex-1 rounded-21xl bg-gray-400 flex flex-row p-[0.5rem] items-center justify-center gap-[0.75rem]">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                    alt=""
                    src="/cryptoeth.svg"
                  />
                  <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                    ETH
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end gap-[0.25rem] text-right">
                  <div className="flex-1 relative leading-[1.5rem]">0.00</div>
                  <div className="relative leading-[1.5rem] hidden">%</div>
                </div>
                <img
                  className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="/expand-more1.svg"
                />
              </div>
              <div className="rounded-21xl bg-gray-400 w-[4.75rem] shrink-0 flex flex-row p-[0.5rem] box-border items-center justify-center gap-[0.75rem]">
                <div className="hidden flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                    alt=""
                    src="/cryptomatic2.svg"
                  />
                  <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium hidden">
                    MATIC
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end gap-[0.25rem] text-right">
                  <div className="relative leading-[1.5rem] flex items-center w-[3.5rem] shrink-0">
                    0.00
                  </div>
                  <div className="relative leading-[1.5rem]">%</div>
                </div>
                <img
                  className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="/expand-more1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                Investment plan
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  Buy every
                </div>
                <div className="flex-1">
                  <Button
                    id="button-day"
                    aria-controls="menu-day"
                    aria-haspopup="true"
                    aria-expanded={dropdown3Open ? "true" : undefined}
                    onClick={handleDropdown3Click}
                    color="primary"
                  >
                    day
                  </Button>
                  <Menu
                    anchorEl={dropdown3AnchorEl}
                    open={dropdown3Open}
                    onClose={handleDropdown3Close}
                  />
                </div>
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  with
                </div>
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  variant="filled"
                  type="text"
                  label="0"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
                  repetitions
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-sm [background:linear-gradient(111.98deg,_rgba(77,_203,_228,_0.5),_rgba(72,_39,_169,_0.5))] flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center text-center text-[0.88rem] text-white font-montserrat">
              <div className="flex-1 relative leading-[1.25rem] font-semibold">
                Connect wallet
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] text-[1.38rem]">
          <div className="self-stretch rounded-xl bg-gray-200 h-[25.31rem] shrink-0 flex flex-col p-[1rem] box-border items-start justify-start">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[2.25rem]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="relative leading-[1.81rem] font-medium">
                    MATIC/ETH
                  </div>
                  <div className="relative text-[1rem] tracking-[0.15px] leading-[1.44rem] font-medium">
                    0.0005981505830620999
                  </div>
                </div>
                <div className="w-[15.25rem] shrink-0 flex flex-col items-end justify-end gap-[0.25rem] text-center text-[0.75rem]">
                  <div className="self-stretch rounded-21xl bg-gray-400 flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-start">
                    <div className="rounded-11xl flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-center">
                      <div className="relative tracking-[0.5px] leading-[1.19rem]">
                        Day
                      </div>
                    </div>
                    <div className="rounded-11xl flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-center">
                      <div className="relative tracking-[0.5px] leading-[1.19rem]">
                        Week
                      </div>
                    </div>
                    <div className="rounded-21xl bg-gray-200 flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-center">
                      <div className="relative tracking-[0.5px] leading-[1.19rem]">
                        Month
                      </div>
                    </div>
                    <div className="rounded-11xl flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-center">
                      <div className="relative tracking-[0.5px] leading-[1.19rem]">
                        YTD
                      </div>
                    </div>
                    <div className="rounded-11xl flex flex-row py-[0.25rem] px-[0.5rem] items-center justify-center">
                      <div className="relative tracking-[0.5px] leading-[1.19rem]">
                        Year
                      </div>
                    </div>
                    <div className="flex-1 hidden flex-row items-center justify-end gap-[0.25rem] text-right text-[1rem]">
                      <div className="flex-1 relative leading-[1.5rem]">
                        0.00
                      </div>
                      <div className="relative leading-[1.5rem] hidden">%</div>
                    </div>
                  </div>
                  <label className="self-stretch relative text-[0.88rem] tracking-[0.1px] leading-[1.31rem] text-right">
                    0.0005981505830620999
                  </label>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-center text-[0.75rem] text-lightgray">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[16.69rem] shrink-0"
                  alt=""
                  src="/chart.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative tracking-[0.5px] leading-[1.19rem] inline-block w-[2.69rem] shrink-0">
                    Mar 10
                  </div>
                  <div className="relative tracking-[0.5px] leading-[1.19rem] inline-block w-[2.69rem] shrink-0">
                    Mar 17
                  </div>
                  <div className="relative tracking-[0.5px] leading-[1.19rem]">
                    Mar 20
                  </div>
                  <div className="relative tracking-[0.5px] leading-[1.19rem]">
                    Mar 24
                  </div>
                  <div className="relative tracking-[0.5px] leading-[1.19rem]">
                    Mar 28
                  </div>
                  <div className="relative tracking-[0.5px] leading-[1.19rem] inline-block w-[2.69rem] shrink-0">
                    Apr 1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-xl bg-gray-200 flex flex-col p-[1rem] items-start justify-start gap-[0.25rem] text-[1rem]">
            <div className="relative tracking-[0.15px] leading-[1.44rem] font-medium">
              Market data
            </div>
            <div className="flex-1 w-[30.63rem] flex flex-col items-start justify-start text-right text-[0.88rem]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <legend className="p-0 self-stretch relative tracking-[0.1px] leading-[1.31rem] font-medium">
                        Asset
                      </legend>
                      <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                        Secondary Text
                      </div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <legend className="p-0 self-stretch relative tracking-[0.1px] leading-[1.31rem] font-medium">
                        Price
                      </legend>
                      <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                        Secondary Text
                      </div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                      alt=""
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <legend className="p-0 self-stretch relative tracking-[0.1px] leading-[1.31rem] font-medium">
                        1h %
                      </legend>
                      <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                        Secondary Text
                      </div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end gap-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-center">
                      <legend className="p-0 self-stretch relative tracking-[0.1px] leading-[1.31rem] font-medium">
                        24h %
                      </legend>
                      <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                        Secondary Text
                      </div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end gap-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-center">
                      <legend className="p-0 self-stretch relative tracking-[0.1px] leading-[1.31rem] font-medium">
                        7d %
                      </legend>
                      <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                        Secondary Text
                      </div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start text-[1rem]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left1.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right1.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right2.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left1.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right1.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right2.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left3.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left3.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left3.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left3.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-left">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-left3.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.15px] leading-[1.44rem] font-medium">
                          ETH
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem]">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.5rem]">
                          1890.00
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 hidden"
                        alt=""
                        src="/icon-right.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-red">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[3.25rem] flex flex-row items-start justify-start text-system-green">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.75rem] items-center justify-end">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] shrink-0 hidden"
                        alt=""
                        src="/icon-left2.svg"
                      />
                      <div className="flex-1 flex flex-col items-end justify-center">
                        <div className="self-stretch relative leading-[1.5rem]">
                          0.67 %
                        </div>
                        <div className="self-stretch relative text-[0.81rem] leading-[150%] font-row-secondary-text text-gray-100 text-left hidden opacity-[0.7]">
                          Secondary Text
                        </div>
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
                        alt=""
                        src="/icon-right3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNetworkOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNetwork}
        >
          <Network onClose={closeNetwork} />
        </PortalPopup>
      )}
    </>
  );
};

export default FormMaticEth;
