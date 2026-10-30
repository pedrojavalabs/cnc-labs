package com.example.cad;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CadModelRepository extends JpaRepository<CadModel, Long> {
    List<CadModel> findAllByOrderByCreatedAtDesc();
}
