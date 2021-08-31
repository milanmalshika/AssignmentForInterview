package com.example.CrudSpringBoot.Bank;

import com.example.CrudSpringBoot.Bank.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

//createRepository has generic TYpe <>
public  interface BankRepository extends JpaRepository<Bank, String> {


}
