package com.example.CrudSpringBoot.Bank;


import com.example.CrudSpringBoot.Bank.Bank;
import com.example.CrudSpringBoot.Bank.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import java.util.List;


@Service
public class BankService {
    //inject repository
    @Autowired
    private BankRepository bankRepository;

    //creating mutable array using new Arraylist<>();
//    private List<Student> students = new ArrayList<>(Arrays.asList(
//            new Student(1,"kavindya","CS",2000),
//            new Student(2,"kavindya","CS",2000),
//            new Student(3,"kavindya","CS",2000)
//
//    ));

    //get all bank (calling service)
    public List<Bank> getAllBank(){
        //return  students;
        List<Bank> banks =new ArrayList<>();
        bankRepository.findAll()
        .forEach(banks::add);
        return banks;
    }

//    //get a student using filtered by id
//    public Bank getStudent(String id){
//       //return students.stream().filter(t->t.getId().equals(id)).findFirst().get();
//        return bankRepository.findById(id).get();
//
//    }
//
    //add bank
    public void addBank(Bank bank){
      bankRepository.save(bank);
    }
//
//    //update particular student
//    public void updateStudent(String id, Bank bank) {
//    //        for(int i=0;i<students.size(); i++){
//    //            Student t=students.get(id);
//    //            if(t.getId().equals(id)){
//    //                students.set(i,student);
//    //                return;
//    //            }
//    //
//    //        }
//        bankRepository.save(bank);
//    }
//
//    //delete a student
//    public void deleteStudent(String id) {
//        //students.removeIf(t->t.getId().equals(id));
//        bankRepository.deleteById(id);
//    }
}
