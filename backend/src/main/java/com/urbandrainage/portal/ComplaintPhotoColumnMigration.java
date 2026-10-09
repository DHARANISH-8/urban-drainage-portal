package com.urbandrainage.portal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ComplaintPhotoColumnMigration implements CommandLineRunner {

    private final JdbcTemplate jdbcTemplate;

    public ComplaintPhotoColumnMigration(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(String... args) {
        jdbcTemplate.execute("ALTER TABLE drainage_complaints ALTER COLUMN photo_url TYPE TEXT");
        jdbcTemplate.execute("ALTER TABLE drainage_complaints ALTER COLUMN latitude DROP NOT NULL");
        jdbcTemplate.execute("ALTER TABLE drainage_complaints ALTER COLUMN longitude DROP NOT NULL");
        jdbcTemplate.execute("ALTER TABLE drainage_complaints ADD COLUMN IF NOT EXISTS work_progress VARCHAR(2000)");
        jdbcTemplate.execute("ALTER TABLE drainage_complaints ADD COLUMN IF NOT EXISTS resolution_details VARCHAR(2000)");
    }
}
