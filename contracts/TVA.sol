// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TVA is ERC20 {
    uint256 _totalSupply = 100*(10**9)*(10**18); // 100 ty coin

    constructor() ERC20("TVA Token", "TVA") {
        _mint(msg.sender, _totalSupply);
    }

}