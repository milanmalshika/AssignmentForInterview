package com.example.CrudSpringBoot.Bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BankController {
    @Autowired
    private BankService bankService;

    public BankController(BankService bankService) {
        this.bankService = bankService;
    }

    //get all bank
    @RequestMapping("/banks")
    public List<Bank> getAllBank(){
        return bankService.getAllBank();
    }

    @RequestMapping(method = RequestMethod.POST,value="/bank/add")
    public void addStudent(@RequestBody Bank bank){
      bankService.addBank(bank);
    }

}
